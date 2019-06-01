# Tag/tests.py
from django.test import TestCase
import requests

class TagTests(TestCase):

    link = "http://127.0.0.1:8000/tag/"

    def get_tag(self):
        link = self.link + "list"
        response = requests.get(link)
        self.assertEqual(int(response.status_code/100), 2)

#update number every test
    def post_tag(self):
        link = self.link + "list"
        data =  {
            "name": "test tag1"
        }
        response = requests.post(link, data = data)
        self.assertEqual(int(response.status_code/100), 2)

    def get_taggeditem(self):
        link = self.link + "taggeditem"
        response = requests.get(link)
        self.assertEqual(int(response.status_code/100), 2)

#update object_id every test
# in real case u shouldn't do post
    def post_taggeditem(self):
        link = self.link + "taggeditem"
        data =  {
            "object_id": 104,
            "tag": 1,
            "content_type": 17
        }
        response = requests.post(link, data = data)
        self.assertEqual(int(response.status_code/100), 2)

    def get_tagfilter(self):
        link = self.link + "filter/1"
        response = requests.get(link)
        self.assertEqual(int(response.status_code/100), 2)

    def test_total_tag(self):
        self.post_tag()
        self.get_tag()
        self.post_taggeditem()
        self.get_taggeditem()
        self.get_tagfilter()
