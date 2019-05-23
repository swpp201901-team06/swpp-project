# Archive/tests.py
from django.test import TestCase
import requests

class ArchiveTests(TestCase):

    link = "http://127.0.0.1:8000/"

    def sign_up(self):
        link = "http://127.0.0.1:8000/Account/registration/"
        data = {
            "username": "asdf-4",
            "email": "asdf-4@asdf.asdf",
            "password1": "asdf!@#$",
            "password2": "asdf!@#$"
        }
        response = requests.post(link, data = data)
        self.assertEqual(int(response.status_code/100), 2)


    def get_archive_list(self):
        link = self.link + "Archive/list/"
        response = requests.get(link)
        self.assertEqual(int(response.status_code/100), 2)

#update number every test
#u should change auth email with who don't have archive
    def post_archive(self):
        link = self.link + "Archive/list/"
        data = {}
        response = requests.post(link, data = data, auth = ("asdf-4@asdf.asdf", "asdf!@#$"))
        self.assertEqual(int(response.status_code/100), 2)

    def test_total_archive(self):
        self.sign_up()
        self.post_archive()
        self.get_archive_list()
