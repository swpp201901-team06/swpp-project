# Review/tests.py
from django.test import TestCase
import requests

class ReviewTests(TestCase):

    link = "http://127.0.0.1:8000/"

    def sign_up(self):
        link = self.link + "account/registration/"
        data = {
            "username": "qwer-1",
            "email": "qwer-1@qwer.qwer",
            "password1": "qwer!@#$",
            "password2": "qwer!@#$"
        }
        response = requests.post(link, data = data)
        self.assertEqual(int(response.status_code/100), 2)

    def archive_post(self):
        link = self.link + "archive/list"
        data = {}
        response = requests.post(link, data = data, auth = ("qwer-1@qwer.qwer", "qwer!@#$"))
        self.assertEqual(int(response.status_code/100), 2)

    def get_review_list(self):
        link = self.link + "review/post"
        response = requests.get(link)
        self.assertEqual(int(response.status_code/100), 2)

    def post_review_list(self):
        link = self.link + "review/post"
        data = {
            "content": "test content",
            "eatWhen": "2019-01-02T02:00:00Z",
            "publicStatus": False,
            "score": 4,
            "restaurantId": 2,
            "tags": "new tag1, new tag2"
        }
        response = requests.post(link, data = data, auth = ("qwer-1@qwer.qwer", "qwer!@#$"))
        self.assertEqual(int(response.status_code/100), 2)

#update number every test
    def delete_review(self):
        link = self.link + "review/detail/1"
        response = requests.delete(link, auth = ("qwer-1@qwer.qwer", "qwer!@#$"))
        self.assertEqual(int(response.status_code/100), 2)

    def put_review(self):
        link = self.link + "review/detail/1"
        data = {
            "content": "test content (modified)",
            "eatWhen": "2019-01-02T02:00:00Z",
            "publicStatus": False,
            "score": 4,
            "restaurantId": 2,
            "tags": "new tag1, new tag2",
            "id": 1
        }
        response = requests.put(link, data = data, auth = ("qwer-1@qwer.qwer", "qwer!@#$"))
        self.assertEqual(int(response.status_code/100), 2)

###############resturant
    def get_restlist(self):
        link = self.link + "restaurant/list"
        response = requests.get(link)
        self.assertEqual(int(response.status_code/100), 2)

#update number every test
    def post_restaurant(self):
        link = self.link + "restaurant/list"
        data = {
            "rName": "test_rest_name5",
            "rAddress": "test_rest_add"
        }
        response = requests.post(link, data = data)
        self.assertEqual(int(response.status_code/100), 2)

#update number every test
#    def delete_rest(self):
#        link = self.link + "Restaurant/detail/1/"
#        response = requests.delete(link)
#        self.assertEqual(int(response.status_code/100), 2)

    def test_total_review(self):
        self.sign_up()
        self.archive_post()

        self.post_restaurant()

        self.post_review_list()
        self.get_review_list()
        self.put_review()
        self.delete_review()

#        self.delete_rest()
