from django.test import TestCase
from django.utils import timezone
from .models import CustomUser
import requests

# Create your tests here.


class CustomUserModelTests(TestCase):

    link = "http://127.0.0.1:8000/User/"

    def archive_post(self):
        link = "http://127.0.0.1:8000/Archive/list/"
        data = {}
        response = requests.post(link, data = data, auth = ("qwer-2@qwer.qwer", "qwer!@#$"))
        self.assertEqual(response.status_code, 201)


    def sign_up(self):
        link = "http://127.0.0.1:8000/Account/registration/"
        data = {
            "username": "qwer-2",
            "email": "qwer-2@qwer.qwer",
            "password1": "qwer!@#$",
            "password2": "qwer!@#$"
        }
        response = requests.post(link, data = data)
        self.assertEqual(response.status_code, 201)

    def get_list(self):
        link = self.link + "list/"
        response = requests.get(link)
        self.assertEqual(response.status_code, 200)


    def get_detail(self):
        link = self.link + "detail/qwer-2/"
        response = requests.get(link)
        self.assertEqual(response.status_code, 200)

    def delete_user(self):
        link = self.link + "detail/qwer-2/"
        response = requests.delete(link)
        self.assertEqual(response.status_code, 204)

    def get_nickname(self):
        link = self.link + "get-username/qwer-2@qwer.qwer/"
        response = requests.get(link)
        self.assertEqual(response.status_code, 200)

    def get_exist_email(self):
        link = self.link + "exists/email/qwer-2@qwer.qwer/"
        response = requests.get(link)
        self.assertEqual(response.status_code, 200)

    def get_exist_username(self):
        link = self.link + "exists/username/qwer-2/"
        response = requests.get(link)
        self.assertEqual(response.status_code, 200)


    def update_user(self):
        link = self.link + "detail/qwer-2/"
        data = {
            "username": "qwer-2",
            "email": "qwer-2@qwer.qwer",
            "publicStatus": True,
            "Archive": "qwer-2"
        }
        response = requests.put(link, data = data)
        self.assertEqual(response.status_code, 200)

    def test_total_user(self):
        self.sign_up()
        self.archive_post()
        self.get_list()
        self.get_detail()
        self.get_nickname()
        self.get_exist_email()
        self.get_exist_username()
        self.update_user()
        self.delete_user()
