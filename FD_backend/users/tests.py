from django.test import TestCase
import json

from FD_backend.inittest import remove_user, remove_archive, create_user, create_archive


# Create your tests here.


class CustomUserModelTests(TestCase):
    def setUp(self):
        print("Users Test")
        # Create two users
        test_user1 = create_user(username = "Utestuser1", email = "Utestemail1@test.com", password = "testpassword!@#$")
        test_user2 = create_user(username = "Utestuser2", email = "Utestemail2@test.com", password = "testpassword!@#$")

        # Create two archives
        create_archive(user = test_user1)
        create_archive(user = test_user2)

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
        link = "/user/username/" + email
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
        remove_archive(username = "Utestuser1")
        remove_archive(username = "Utestuser2")
        remove_user(username = "Utestuser1")
        remove_user(username = "Utestuser2")
