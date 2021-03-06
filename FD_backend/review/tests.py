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
        create_restaurant(name = "RtestRest1", address = "RtestAddr1")
        create_restaurant(name = "RtestRest2", address = "RtestAddr2")

    # 새로운 리뷰 Create (Post)
    def post_review(self, email):
        link = "/review/list"
        data = {
            "content": "test content",
            "eat_when": "2019-01-02T02:00:00Z",
            "public_status": False,
            "score": 3,
            "tags": "new tag1, new tag2",
            "restaurant_id": 1
        }

        self.client.login(email = email, password = "testpassword!@#$")
        response = self.client.post(link, data = data)
        self.assertEqual(response.status_code, 201)
        print("\tPost Review")

    # 전체 리뷰 리스트 가져오기(get)
    def get_review_list(self):
        link = "/review/list"
        response = self.client.get(link)
        self.assertEqual(response.status_code, 200)
        print("\tGet Review List")

    # 리뷰 수정 (Put)
    def put_review(self, email):
        link = "/review/detail/1"
        data = {
            "content": "test content (modified)",
            "eat_when": "2019-01-02T02:00:00Z",
            "public_status": False,
            "score": 5,
            "restaurant_id": 2,
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

    def get_user_review(self, username):
        link = "/review/list/" + username
        response = self.client.get(link)
        self.assertEqual(response.status_code, 200)

    def get_sorted_review(self, username, sortopt):
        link = "/review/list/" + username + "/" + sortopt
        response = self.client.get(link)
        self.assertEqual(response.status_code, 200)

    def get_search_review(self, username):
        link = "/review/search/" + username
        response = self.client.get(link)
        self.assertEqual(response.status_code, 200)

    def get_review_ranking(self):
        link = "/review/ranking"
        response = self.client.get(link)
        self.assertEqual(response.status_code, 200)

    def test_total_review(self):
        self.post_review("Rtestemail1@test.com")
        self.get_review_list()
        self.put_review("Rtestemail1@test.com")

        self.get_user_review("Rtestuser1")
        self.get_sorted_review("Rtestuser1", "hits")
        self.get_search_review("Rtestuser1")
        self.get_review_ranking()
        self.delete_review("Rtestemail1@test.com")

        # remove test user
        remove_archive(username = "Rtestuser1")
        remove_archive(username = "Rtestuser2")
        remove_user(username = "Rtestuser1")
        remove_user(username = "Rtestuser2")
        remove_restaurant(name = "RtestRest1")
        remove_restaurant(name = "RtestRest2")
