from django.test import TestCase
import requests

# Create your tests here.


class LoginModelTests(TestCase):

    link = "http://127.0.0.1:8000/api/rest-auth/"

    def setUp(self):
        pass

    def sign_up(self):
        link = self.link + "registration/"
        data = {
            "username": "zxcv4",
            "email": "zxcv4@zxcv.zxcv",
            "password1": "zxcv!@#$",
            "password2": "zxcv!@#$"
        }
        response = requests.post(link, data = data)

        self.assertEqual(response.status_code, 201) #created

    def sign_in(self):
        link = self.link + "login/"
        data = {
            "username": "zxcv4",
            "email": "zxcv4@zxcv.zxcv",
            "password": "zxcv!@#$"
        }
        response = requests.post(link, data = data)

        self.assertEqual(response.status_code, 200) #ok

#TODO : 진짜로 로그아웃 되었는지 check 해야댐
    def sign_out(self):
        link = self.link + "logout/"
        response = requests.post(link)

        self.assertEqual(response.status_code, 200)

    def test_total_login(self):
        self.sign_up()
        self.sign_out()
        self.sign_in()
        self.sign_out()
