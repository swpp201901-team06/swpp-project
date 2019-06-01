# Tag/tests.py
from django.test import TestCase

class TagTests(TestCase):

    def get_tag(self):
        link = "/tag/list"
        response = self.client.get(link)
        self.assertEqual(response.status_code, 200)

#update number every test
    def post_tag(self):
        link = "/tag/list"
        data =  {
            "name": "testtag1"
        }
        response = self.client.post(link, data = data)
        self.assertEqual(response.status_code, 201)

    def get_taggeditem(self):
        link = "/tag/taggeditem"
        response = self.client.get(link)
        self.assertEqual(response.status_code, 200)

#update object_id every test

    def get_tagfilter(self):
        link = "/tag/filter/testtag1"
        response = self.client.get(link)
        self.assertEqual(response.status_code, 200)

    def test_total_tag(self):
        self.post_tag()
        self.get_tag()
        self.get_taggeditem()
        self.get_tagfilter()
