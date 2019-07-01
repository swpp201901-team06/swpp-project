from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponseBadRequest
from django.shortcuts import get_object_or_404

from archive.models import Archive
from user.models import CustomUser
from review.models import Review
from restaurant.models import Restaurant
from restaurant.serializers import RestaurantSerializer
from review.serializers import ReviewSerializer
from user.serializers import UserSerializer

from .serializers import RecommendSerializer

from math import sqrt

def sim_pearson(data, name1, name2):
    sum_x=0 # X의 합
    sum_y=0 # Y의 합
    sum_pow_x=0 # X 제곱의 합
    sum_pow_y=0 # Y 제곱의 합
    sum_xy=0 # X*Y의 합
    count=0 # 식당 개수
    for i in data[name1]: # i = key
        if i in data[name2]: # 같은 식당을 평가했을때만
            sum_x+=data[name1][i]
            sum_y+=data[name2][i]
            sum_pow_x+=pow(data[name1][i],2)
            sum_pow_y+=pow(data[name2][i],2)
            sum_xy+=data[name1][i]*data[name2][i]
            count+=1

    # 서로 겹치는 식당이 최소 4개 이상 있을 때만 상관계수를 측정함
    if count < 4:
        print("count is small")
        return -2
    divider = sqrt((sum_pow_x-(pow(sum_x,2)/count))*(sum_pow_y-(pow(sum_y,2)/count)))
    if divider == 0:
        print("divider is zero")
        return -3
    return (sum_xy - ((sum_x*sum_y)/count)) / divider

# 딕셔너리 돌면서 상관계수순으로 정렬
def top_match(data, name, index=3):
    li=[]
    for i in data: #딕셔너리를 돌고
        if name!=i: #자기 자신이 아닐때만
            li.append((sim_pearson(data,name,i),i)) #sim_pearson()을 통해 상관계수를 구하고 li[]에 추가
    li.sort() #오름차순
    li.reverse() #내림차순
    return li[:index]


def getRecommendation (data, person):
    result = top_match(data, person ,len(data))

    count=0
    score=0 # 평점 합을 위한 변수
    li=[] # 리턴을 위한 리스트
    score_dic={} # 유사도 총합을 위한 dic
    sim_dic={} # 평점 총합을 위한 dic
    user_dic={} #

    for sim,user_id in result: # 튜플이므로 한번에
        if sim < 0 : continue #유사도가 양수인 사람만
        count += 1

        for restaurant in data[user_id]:
            if restaurant not in data[person]: # person이 평가를 내리지 않은 식당
                score += sim*data[user_id][restaurant] # 특정 유저와 person의 유사도 * 특정 유저가 매긴 식당평점
                score_dic.setdefault(restaurant,0) # 기본값 설정
                score_dic[restaurant] += score # 합계 구함
                if restaurant in user_dic:
                    if user_dic[restaurant]["similarity"] < sim:
                        user_dic[restaurant]["user"] = user_id
                        user_dic[restaurant]["similarity"] = sim
                else:
                    user_dic[restaurant] = {
                        "similarity" : sim,
                        "user" : user_id
                    }

                # 조건에 맞는 사람의 유사도의 누적합을 구한다
                sim_dic.setdefault(restaurant,0)
                sim_dic[restaurant] += sim

            score=0  #식당이 바뀌었으니 초기화한다

    # 상관 계수가 0보다 큰 유저가 2명 이상일 때만 적용함
    if count < 2:
        print("# of similar user is too small")
        return []
    for key in score_dic:
        score_dic[key] = score_dic[key]/sim_dic[key] # 평점 총합/ 유사도 총합
        if score_dic[key] > 7.0:
            li.append((score_dic[key],(key, user_dic[key]["user"]))) # (식당 id, 유저 id) 튜플 리스트를 리턴함
    li.sort()
    li.reverse()

    return li[:10]


class RecommendationView(APIView):
    def get(self, request, username):
        user_queryset = CustomUser.objects.filter(username=username)
        user = user_queryset[0]
        user_set = user.follows.all()
        user_set = user_set | user_queryset
        new_user = CustomUser.objects.filter(followers__in=user_set).distinct()
        user_number = new_user.count()
        data = {}
        id_list = []

        # follow하는 유저와 follow한 유저가 follow하는 유저의 합이 3 이상일때 추천 시스템을 적용함
        if user_number >= 3:
            review_set = Review.objects.select_related('archive').select_related('archive__user').exclude(archive__user__username=username).filter(archive__user__in=new_user, public_status=True).order_by('-hits')
            users_review = Review.objects.select_related('archive').select_related('archive__user').filter(archive__user__username=username)
            users_review_value = users_review.values('restaurant_id', 'score')
            data[user.id] = {}
            temp_count = {}

            # making data for user
            for val in users_review_value:
                key = val['restaurant_id']
                if key in data[user.id]:
                    if key in temp_count:
                        temp_count[key] += 1
                    else:
                        temp_count[key] = 2
                    data[user.id][key] += val['score']
                else:
                    data[user.id][key] = val['score']
            for key in temp_count.keys():
                data[user.id][key] /= temp_count[key]

            # making data for other user
            for i in range(user_number):
                id = new_user.values('id')[i]['id']
                review_list = review_set.filter(archive__user__id=id)
                review_list_value = review_list.values('restaurant_id', 'score')
                if review_list.exists():
                    id_list.append(id)
                    data[id] = {}
                    temp_count = {}
                    for val in review_list_value:
                        key = val['restaurant_id']
                        if key in data[id]:
                            if key in temp_count:
                                temp_count[key] += 1
                            else:
                                temp_count[key] = 2
                            data[id][key] += val['score']
                        else:
                            data[id][key] = val['score']
                    for key in temp_count.keys():
                        data[id][key] /= temp_count[key]


            list_recommend = getRecommendation(data, user.id)

            result_list = []
            # get recommend review list
            for score, recommend in list_recommend:
                 recommend_rest, recommend_user = recommend
                 result_list.append(Review.objects.select_related('archive').select_related('archive__user').filter(restaurant_id=recommend_rest, archive__user__id=recommend_user).order_by('-score').first().id)
            result_queryset = Review.objects.filter(id__in=result_list)

            # 추천할 리뷰가 3개 이상일때만 추천 시스템을 적용함
            if result_queryset.count() >= 3:
                serializer = ReviewSerializer(result_queryset[:5], many = True)
                return Response(serializer.data)

            if review_set.count() >= 3:
                serializer = ReviewSerializer(review_set[:5], many = True)
                return Response(serializer.data)

        review_set = Review.objects.select_related('archive').select_related('archive__user').exclude(archive__user__username=username).filter(public_status=True).order_by('-hits')
        serializer = ReviewSerializer(review_set[:5], many = True)
        return Response(serializer.data)
