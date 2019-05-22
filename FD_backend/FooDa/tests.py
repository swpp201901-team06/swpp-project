from django.test import TestCase
import requests

# Create your tests here.

class ArchiveTests(TestCase):

    link = "http://127.0.0.1:8000/FooDa/"

    def sign_up(self):
        link = "http://127.0.0.1:8000/api/rest-auth/registration/"
        data = {
            "username": "asdf-4",
            "email": "asdf-4@asdf.asdf",
            "password1": "asdf!@#$",
            "password2": "asdf!@#$"
        }
        response = requests.post(link, data = data)
        self.assertEqual(int(response.status_code/100), 2)


    def get_archive_list(self):
        link = self.link + "archivelist/"
        response = requests.get(link)
        self.assertEqual(int(response.status_code/100), 2)

#update number every test
#u should change auth email with who don't have archive
    def post_archive(self):
        link = self.link + "archivelist/"
        data = {}
        response = requests.post(link, data = data, auth = ("asdf-4@asdf.asdf", "asdf!@#$"))
        self.assertEqual(int(response.status_code/100), 2)

    def test_total_archive(self):
        self.sign_up()
        self.post_archive()
        self.get_archive_list()

class ReviewTests(TestCase):

    link = "http://127.0.0.1:8000/FooDa/"

    def sign_up(self):
        link = "http://127.0.0.1:8000/api/rest-auth/registration/"
        data = {
            "username": "qwer-1",
            "email": "qwer-1@qwer.qwer",
            "password1": "qwer!@#$",
            "password2": "qwer!@#$"
        }
        response = requests.post(link, data = data)
        self.assertEqual(int(response.status_code/100), 2)

    def archive_post(self):
        link = self.link + "archivelist/"
        data = {}
        response = requests.post(link, data = data, auth = ("qwer-1@qwer.qwer", "qwer!@#$"))
        self.assertEqual(int(response.status_code/100), 2)

    def get_review_list(self):
        link = self.link + "reviewlist/"
        response = requests.get(link)
        self.assertEqual(int(response.status_code/100), 2)

    def post_review_list(self):
        link = self.link + "reviewlist/"
        data = {
            "content": "test content",
            "eatWhen": "2019-01-02T02:00:00Z",
            "publicStatus": False,
            "postTime": "2019-05-06T07:08:06.794965Z",
            "score": 4,
            "restaurantId": 1,
            "archive": "qwer-1",
            "hits": 0,
            "tags": "new tag1, new tag2"
        }
        response = requests.post(link, data = data, auth = ("qwer-1@qwer.qwer", "qwer!@#$"))
        self.assertEqual(int(response.status_code/100), 2)

#update number every test
    def delete_review(self):
        link = self.link + "reviewdetail/1/"
        response = requests.delete(link, auth = ("qwer-1@qwer.qwer", "qwer!@#$"))
        self.assertEqual(int(response.status_code/100), 2)

    def put_review(self):
        link = self.link + "reviewdetail/1/"
        data = {
            "content": "test content (modified)",
            "eatWhen": "2019-01-02T02:00:00Z",
            "publicStatus": False,
            "postTime": "2019-05-06T07:08:06.794965Z",
            "score": 4,
            "restaurantId": 1,
            "archive": "qwer-1",
            "hits": 0,
            "tags": "new tag1, new tag2"
        }
        response = requests.put(link, data = data, auth = ("qwer-1@qwer.qwer", "qwer!@#$"))
        self.assertEqual(int(response.status_code/100), 2)

###############resturant
    def get_restlist(self):
        link = self.link + "restaurantlist/"
        response = requests.get(link)
        self.assertEqual(int(response.status_code/100), 2)

#update number every test
    def post_restaurant(self):
        link = self.link + "restaurantlist/"
        data = {
            "rName": "test_rest_name5",
            "rAddress": "test_rest_add"
        }
        response = requests.post(link, data = data)
        self.assertEqual(int(response.status_code/100), 2)

    def get_restdetail(self):
        link = self.link + "restaurantdetail/1/"
        response = requests.get(link)
        self.assertEqual(int(response.status_code/100), 2)

    def put_restdetail(self):
        link = self.link + "restaurantdetail/1/"
        data = {
            "rName": "rest1_(modify)",
            "rAddress": "restadd"
        }
        response = requests.put(link, data = data)
        self.assertEqual(int(response.status_code/100), 2)

#update number every test
    def delete_rest(self):
        link = self.link + "restaurantdetail/1/"
        response = requests.delete(link)
        self.assertEqual(int(response.status_code/100), 2)

    def test_total_review(self):
        self.sign_up()
        self.archive_post()

        self.post_restaurant()
        self.get_restlist()
        self.get_restdetail()
        self.put_restdetail()

        self.post_review_list()
        self.get_review_list()
        self.put_review()
        self.delete_review()

        self.delete_rest()


class TagTests(TestCase):

    link = "http://127.0.0.1:8000/FooDa/"

    def get_tag(self):
        link = self.link + "tagging/"
        response = requests.get(link)
        self.assertEqual(int(response.status_code/100), 2)

#update number every test
    def post_tag(self):
        link = self.link + "tagging/"
        data =  {
            "name": "test tag1"
        }
        response = requests.post(link, data = data)
        self.assertEqual(int(response.status_code/100), 2)

    def get_taggeditem(self):
        link = self.link + "taggeditem/"
        response = requests.get(link)
        self.assertEqual(int(response.status_code/100), 2)

#update object_id every test
# in real case u shouldn't do post
    def post_taggeditem(self):
        link = self.link + "taggeditem/"
        data =  {
            "object_id": 104,
            "tag": 1,
            "content_type": 17
        }
        response = requests.post(link, data = data)
        self.assertEqual(int(response.status_code/100), 2)

    def get_tagfilter(self):
        link = self.link + "tagfilter/1/"
        response = requests.get(link)
        self.assertEqual(int(response.status_code/100), 2)

    def test_total_tag(self):
        self.post_tag()
        self.get_tag()
        self.post_taggeditem()
        self.get_taggeditem()
        self.get_tagfilter()
