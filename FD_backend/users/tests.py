from django.test import TestCase
import json

from .models import CustomUser
from users.models import CustomUser
from Archive.models import Archive
from Restaurant.models import Restaurant

# Create your tests here.


class CustomUserModelTests(TestCase):

    def setUp(self):
        # Create two users
        test_user1 = CustomUser.objects.create_user(username = "Utestuser1", email = "Utestemail1@test.com", password = "testpassword!@#$")
        test_user2 = CustomUser.objects.create_user(username = "Utestuser2", email = "Utestemail2@test.com", password = "testpassword!@#$")
        test_user1.save()
        test_user2.save()

        print("\tCreate user Utestuser1")
        print("\tCreate user Utestuser2")

        # Create two archives
        test_archive1 = Archive.objects.create(user = test_user1)
        test_archive2 = Archive.objects.create(user = test_user2)
        test_archive1.save()
        test_archive2.save()

        print("\tCreate Utestuser1's Archive")
        print("\tCreate Utestuser2's Archive")

    # 유저 삭제(초기화)
    def remove_user(self, username):
        try:
            user = CustomUser.objects.get(username = username)
            user.delete()
            print("\tDeleted user {0}".format(username))
        except CustomUser.DoesNotExist:
            pass
        return
    # 아카이브 삭제(초기화)
    def remove_archive(self, username):
        try:
            archive = Archive.objects.get(user__username = username)
            archive.delete()
            print("\tDeleted archive {0}".format(username))
        except Archive.DoesNotExist:
            pass
        return

    # 유저 리스트 가져오기 (Get)
    def get_list(self):
        link = "/user/list"
        response = self.client.get(link)
        self.assertEqual(response.status_code, 200)

    # 유저 상세 정보 가져오기 (Get)
    def get_detail(self, username):
        link = "/user/detail/" + username
        response = self.client.get(link)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['username'], username)
        print("\tGet {0}'s information".format(username))

    # 유저 삭제하기 (Delete)
    def delete_user(self):
        link = "/user/detail/Utestuser1"
        response = self.client.delete(link)
        self.assertEqual(response.status_code, 204)

    # 유저 이메일을 통해 유저 이름 가져오기 (Get)
    def get_username(self, email, username):
        link = "/user/email/" + email
        response = self.client.get(link)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['username'], username)
        print("\tUser who have Email {0} is {1}".format(email, username))

    # 이메일이 이미 존재하는지 확인 (Get)
    def get_exist_email(self, email, existence):
        link = "/user/exists/email/" + email
        response = self.client.get(link)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), existence)
        print("\tEmail {0} is {1}".format(email, existence))

    # 유저 이름이 이미 존재하는지 확인 (Get)
    def get_exist_username(self, username, existence):
        link = "/user/exists/username/" + username
        response = self.client.get(link)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), existence)
        print("\tUsername {0} is {1}".format(username, existence))

    # 유저 정보 수정 (Put)
    def update_user(self):
        link = "/user/detail/Utestuser1"
        data = {
            "username": "Utestuser1",
            "email": "Utestuser1@test.com",
            "publicStatus": True,
            "Archive": "Utestuser1"
        }
        response = self.client.put(link, data = json.dumps(data), content_type='application/json')
        self.assertEqual(response.status_code, 200)

    def test_total_user(self):
        self.get_list()
        self.get_detail("Utestuser1")
        self.get_detail("Utestuser2")

        self.get_username("Utestemail1@test.com", "Utestuser1")
        self.get_username("Utestemail2@test.com", "Utestuser2")

        self.get_exist_email("Utestemail1@test.com", "exist")
        self.get_exist_email("Utestemail2@test.com", "exist")
        self.get_exist_email("NotExistEmail", "not exist")

        self.get_exist_username("Utestuser1", "exist")
        self.get_exist_username("Utestuser2", "exist")
        self.get_exist_username("NotExistName", "not exist")

        self.update_user()
        self.delete_user()

        # remove test user
        self.remove_archive("Utestuser1")
        self.remove_archive("Utestuser2")
        self.remove_user("Utestuser1")
        self.remove_user("Utestuser2")
