# Archive/tests.py
from django.test import TestCase

from FD_backend.inittest import remove_user, remove_archive, create_user


class ArchiveTests(TestCase):
    def setUp(self):
        print("Archive Test")
        # Create two users
        create_user(username = "Atestuser1", email = "Atestemail1@test.com", password = "testpassword!@#$")
        create_user(username = "Atestuser2", email = "Atestemail2@test.com", password = "testpassword!@#$")

    # 아카이브 만들기 (Post)
    def post_archive(self, email):
        link = "/archive/list"
        self.client.login( email = email, password = 'testpassword!@#$')
        data = {}
        response = self.client.post(link, data = data)
        self.assertEqual(response.status_code, 201)
        print("\tCreate archive {0}".format(email))

    # 아카이브 리스트 get (Get)
    def get_archive_list(self):
        link = "/archive/list"
        response = self.client.get(link)
        dict_list = response.json()

        # get이 제대로 되었는지 확인
        self.assertEqual(dict_list[0]['user'],'Atestuser1')
        self.assertEqual(dict_list[1]['user'],'Atestuser2')
        self.assertEqual(response.status_code, 200)

    def get_archive_detail(self, username):
        link = "/archive/detail"


    def test_total_archive(self):
        self.post_archive("Atestemail1@test.com")
        self.post_archive("Atestemail2@test.com")
        self.get_archive_list()
        # remove test user
        remove_archive(username = "Atestuser1")
        remove_archive(username = "Atestuser2")
        remove_user(username = "Atestuser1")
        remove_user(username = "Atestuser2")
