# Review/tests.py
from django.test import TestCase
import json

from users.models import CustomUser
from Archive.models import Archive
from Restaurant.models import Restaurant


class ReviewTests(TestCase):

    def setUp(self):
        # Create two users
        test_user1 = CustomUser.objects.create_user(username = "Rtestuser1", email = "Rtestemail1@test.com", password = "testpassword!@#$")
        test_user2 = CustomUser.objects.create_user(username = "Rtestuser2", email = "Rtestemail2@test.com", password = "testpassword!@#$")
        test_user1.save()
        test_user2.save()

        print("\tCreate user Rtestuser1")
        print("\tCreate user Rtestuser2")

        # Create two archives
        test_archive1 = Archive.objects.create(user = test_user1)
        test_archive2 = Archive.objects.create(user = test_user2)
        test_archive1.save()
        test_archive2.save()

        print("\tCreate Rtestuser1's Archive")
        print("\tCreate Rtestuser2's Archive")

        # Create two Restaurant
        test_restaurant1 = Restaurant.objects.create(rName = "RtestRest1", rAddress = "RtestAddr1")
        test_restaurant2 = Restaurant.objects.create(rName = "RtestRest2", rAddress = "RtestAddr2")
        test_restaurant1.save()
        test_restaurant2.save()

        print("\tCreate restaurant RtestRest1")
        print("\tCreate restaurant RtestRest2")

    # 유저 삭제(초기화)
    def remove_user(self, username):
        try:
            user = CustomUser.objects.get(username = username)
            user.delete()
            print("\tDeleted user {0}".format(username))
        except CustomUser.DoesNotExist:
            pass
        return
    # 아카이브 삭제(초기화)
    def remove_archive(self, username):
        try:
            archive = Archive.objects.get(user__username = username)
            archive.delete()
            print("\tDeleted archive {0}".format(username))
        except Archive.DoesNotExist:
            pass
        return
    # 레스토랑 삭제(초기화)
    def remove_restaurant(self, rName):
        try:
            restaurant = Restaurant.objects.get(rName = rName)
            restaurant.delete()
            print("\tDeleted restaurnat {0}".format(rName))
        except Restaurant.DoesNotExist:
            pass
        return


    # 새로운 리뷰 Create (Post)
    def post_review_list(self, email):
        link = "/review/list"
        data = {
            "content": "test content",
            "eatWhen": "2019-01-02T02:00:00Z",
            "publicStatus": False,
            "score": 4,
            "restaurantId": 1,
            "tags": "new tag1, new tag2"
        }
        self.client.login(email = email, password = "testpassword!@#$")
        response = self.client.post(link, data = data)
        self.assertEqual(response.status_code, 201)

    # 전체 리뷰 리스트 가져오기(get)
    def get_review_list(self):
        link = "/review/list"
        response = self.client.get(link)
        self.assertEqual(response.status_code, 200)

    # 리뷰 수정 (Put)
    def put_review(self, email):
        link = "/review/detail/1"
        data = {
            "content": "test content (modified)",
            "eatWhen": "2019-01-02T02:00:00Z",
            "publicStatus": False,
            "score": 5,
            "restaurantId": 2,
            "tags": "new tag1, new tag2",
            "id": 1
        }
        self.client.login(email = email, password = "testpassword!@#$")
        response = self.client.put(link, data = json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 200)

    # 리뷰 삭제 (Delete)
    def delete_review(self, email):
        link = "/review/detail/1"
        self.client.login(email = email, password = "testpassword!@#$")
        response = self.client.delete(link)
        self.assertEqual(response.status_code, 204)


    def test_total_review(self):
        self.post_review_list("Rtestemail1@test.com")
        self.get_review_list()
        self.put_review("Rtestemail1@test.com")
        self.delete_review("Rtestemail1@test.com")

        # remove test user
        self.remove_archive("Rtestuser1")
        self.remove_archive("Rtestuser2")
        self.remove_user("Rtestuser1")
        self.remove_user("Rtestuser2")
        self.remove_restaurant("RtestRest1")
        self.remove_restaurant("RtestRest2")
