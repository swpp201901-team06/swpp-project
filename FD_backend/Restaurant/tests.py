# Restaurant/tests.py
from django.test import TestCase
import requests

class RestaurantTests(TestCase):

    link = "http://127.0.0.1:8000/Restaurant/"

# Create your tests here.
    def get_restlist(self):
        link = self.link + "list/"
        response = requests.get(link)
        self.assertEqual(int(response.status_code/100), 2)

#update number every test
    def post_restaurant(self):
        link = self.link + "list/"
        data = {
            "rName": "test_rest_name5",
            "rAddress": "test_rest_add"
        }
        response = requests.post(link, data = data)
        self.assertEqual(int(response.status_code/100), 2)

    def get_restdetail(self):
        link = self.link + "detail/1/"
        response = requests.get(link)
        self.assertEqual(int(response.status_code/100), 2)

    def put_restdetail(self):
        link = self.link + "detail/1/"
        data = {
            "rName": "rest1_(modify)",
            "rAddress": "restadd"
        }
        response = requests.put(link, data = data)
        self.assertEqual(int(response.status_code/100), 2)

    def delete_rest(self):
        link = self.link + "detail/1/"
        response = requests.delete(link)
        self.assertEqual(int(response.status_code/100), 2)


    def test_total_restaurant(self):
        self.post_restaurant()
        self.get_restlist()
        self.get_restdetail()
        self.put_restdetail()

        self.delete_rest()
