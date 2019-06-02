# Review/tests.py
from django.test import TestCase
import json

from FD_backend.inittest import remove_user, remove_archive, remove_restaurant, create_user, create_archive, create_restaurant

class ReviewTests(TestCase):
    def setUp(self):
        print("Review Test")
        # Create two users
        test_user1 = create_user(username = "Rtestuser1", email = "Rtestemail1@test.com", password = "testpassword!@#$")
        test_user2 = create_user(username = "Rtestuser2", email = "Rtestemail2@test.com", password = "testpassword!@#$")

        # Create two archives
        create_archive(user = test_user1)
        create_archive(user = test_user2)

        # Create two Restaurant
        create_restaurant(rName = "RtestRest1", rAddress = "RtestAddr1")
        create_restaurant(rName = "RtestRest2", rAddress = "RtestAddr2")

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
        remove_archive(username = "Rtestuser1")
        remove_archive(username = "Rtestuser2")
        remove_user(username = "Rtestuser1")
        remove_user(username = "Rtestuser2")
        remove_restaurant(rName = "RtestRest1")
        remove_restaurant(rName = "RtestRest2")
