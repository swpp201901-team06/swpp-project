# Review/urls.py
from django.urls import path
from . import views
from . import models

# ~/Review/
urlpatterns = [
    path('post/', views.ReviewPostView.as_view(), name = 'review_post'),
    path('detail/<int:pk>/', views.ReviewDetailView.as_view(), name = 'review_detail'),
    path('hit/<int:pk>/', views.ReviewHitsIncreaseView.as_view(), name = 'review_hit'),

    path('list/<str:username>/', views.ReviewListView.as_view(), name = 'review_list'),
    path('sorted-list/<str:username>/<str:sortopt>/', views.SortedReviewListView.as_view(), name = 'sorted_review_list'),
]






'''
가정한 것
name의 input으로는 \t이나 \n과 같은 값이 들어오지 않는다.
특정한 keyid에 대한 translation post는 각 언어별로 최대 1번씩만 수행된다.


1. http://localhost:8000/keys (post)
1.1. Success
{
    "name": "firstkey"
}
{
    "name": "second.key"
}
{
    "name": "third.key.plus.dot."
}

1.2. Fail(invalid input) : HTTP_400_BAD_REQUEST
{
    "name": "InvAlidKey"
}
{
    "name": "invalid_key"
}
{
    "name": "invalid~key"
}

2. http://localhost:8000/keys (get)
2.1. # of keys = 0
{
    "keys": []
}
2.2. # of keys > 0
{
    "keys": [{
        "id": 1,
        "name" : "firstkey"
    },
    {
        "id": 2,
        "name" : "second.key"
    },
    {
        "id": 3,
        "name" : "third.key.plus.dot."
    },
    ]
}

3. http://localhost:8000/keys/{keyId} (put)
3.1. Success
http://localhost:8000/keys/1 (put)
{
    "name": "modified.first.key"
}
http://localhost:8000/keys/3 (put)
{
    "name": "modified.thirdkey"
}

3.2. Fail
 http://localhost:8000/keys/3 (put)
{
    "name": "InvalidModify"
}
{
    "name": "invalid_modify"
}

4. http://localhost:8000/keys/{keyId}/translations/{locale} (post, get, put)
4.1. post

4.2. get

4.3. put

5. http://localhost:8000/keys/{keyId}/translations (get)
5.1. # of translations = 0

5.2. # of translations > 0

3. http://localhost:8000/keys (post)


'''
