# Restaurant/tests.py
from django.test import TestCase
import json

class RestaurantTests(TestCase):
    def setUp(self):
        print("Restaurant Test")
    def get_restlist(self):
        link = "/restaurant/list"
        response = self.client.get(link)
        self.assertEqual(response.status_code, 200)
        print("\tGet restaurant list")

        dict = response.json()
        self.assertEqual(dict[0]['name'], "rest1")
        self.assertEqual(dict[0]['address'], "rest_address1")

#update number every test
    def post_restaurant(self):
        link = "/restaurant/list"
        data = {
            "name": "rest1",
            "address": "rest_address1",
            "latitude": 33.348885,
            "longitude": 126.280975,
        }
        response = self.client.post(link, data = data)
        self.assertEqual(response.status_code, 201)
        print("\tCreate restaurant")

    def get_restdetail(self):
        link = "/restaurant/detail/1"
        response = self.client.get(link)
        self.assertEqual(response.status_code, 200)
        print("\tGet restaurant")

        dict = response.json()
        self.assertEqual(dict['name'], "rest1")
        self.assertEqual(dict['address'], "rest_address1")

    def put_restdetail(self):
        link = "/restaurant/detail/1"
        data = {
            "name": "rest1_(modify)",
            "address": "restadd",
            "latitude": 33.348885,
            "longitude": 126.280975,
        }

        response = self.client.put(link, data = json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 200)
        print("\tUpdate restaurant")

    def delete_rest(self):
        link = "/restaurant/detail/1"
        response = self.client.delete(link)
        self.assertEqual(response.status_code, 204)
        print("\tDelete restaurant")

    def test_total_restaurant(self):
        self.post_restaurant()
        self.get_restlist()
        self.get_restdetail()
        self.put_restdetail()

        self.delete_rest()
