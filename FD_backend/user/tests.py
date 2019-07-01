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
    def get_list(self, number):
        link = "/user/list"
        response = self.client.get(link)
        # get 요청이 정상적으로 수행 되었는지 확인
        self.assertEqual(response.status_code, 200)
        # 유저 수가 number와 같은지 확인
        self.assertEqual(len(response.json()), number)
    # 유저 상세 정보 가져오기 (Get)
    def get_detail(self, username, id, public_status):
        link = "/user/detail/" + str(id)
        response = self.client.get(link)
        # get 요청이 정상적으로 수행 되었는지 확인
        self.assertEqual(response.status_code, 200)
        # 유저 이름이 [username]과 같은지 확인
        self.assertEqual(response.json()['username'], username)
        # 유저의 public_status가 [public_status]와 같은지 확인
        self.assertEqual(response.json()['public_status'], public_status)
        print("\tGet {0}'s information".format(username))

    # 유저 삭제하기 (Delete)
    def delete_user(self, username, id):
        link = "/user/detail/" + str(id)
        response = self.client.delete(link)
        # 삭제 요청이 정상적으로 수행되었는지 확인
        self.assertEqual(response.status_code, 204)
        print("\tDelete user {0}".format(username))

    # 유저 이메일을 통해 유저 이름 가져오기 (Get)
    def get_username(self, email, username):
        link = "/user/username/" + email
        response = self.client.get(link)
        # get 요청이 정상적으로 수행되었는지 확인
        self.assertEqual(response.status_code, 200)
        # get 결과의 username이 [username]과 같은지 확인
        self.assertEqual(response.json()['username'], username)
        print("\tUser who have Email {0} is {1}".format(email, username))

    # 이메일이 이미 존재하는지 확인 (Get)
    def get_exist_email(self, email, existence):
        link = "/user/exists/email/" + email
        response = self.client.get(link)
        # get 요청이 정상적으로 수행되었는지 확인
        self.assertEqual(response.status_code, 200)
        # get 결과가 [existence]와 같은지 확인
        self.assertEqual(response.json()["exist"], existence)
        print("\tEmail {0} is exist : {1}".format(email, existence))

    # 유저 이름이 이미 존재하는지 확인 (Get)
    def get_exist_username(self, username, existence):
        link = "/user/exists/username/" + username
        response = self.client.get(link)
        # get 요청이 정상적으로 수행되었는지 확인
        self.assertEqual(response.status_code, 200)
        # get 결과가 [existence]와 같은지 확인
        self.assertEqual(response.json()["exist"], existence)
        print("\tUsername {0} is exist : {1}".format(username, existence))

        if response.json()["exist"] == "true":
            return response.json()["id"]
        else :
            return -1

    # 유저 정보 수정 - public_status True로 update (Put)
    def update_user(self, username, id):
        link = "/user/detail/" + str(id)
        data = {
            "username": username,
            "public_status": True,
            "Archive": username
        }
        response = self.client.put(link, data = json.dumps(data), content_type='application/json')
        # put 요청이 정상적으로 수행되었는지 확인
        self.assertEqual(response.status_code, 200)

    def test_total_user(self):
        self.get_list(2)
        self.get_username("Utestemail1@test.com", "Utestuser1")
        self.get_username("Utestemail2@test.com", "Utestuser2")

        self.get_exist_email("Utestemail1@test.com", "true")
        self.get_exist_email("Utestemail2@test.com", "true")
        self.get_exist_email("NotExistEmail", "false")

        test_user_one_id = self.get_exist_username("Utestuser1", "true")
        test_user_two_id = self.get_exist_username("Utestuser2", "true")
        self.get_exist_username("NotExistName", "false")

        self.get_detail("Utestuser1", test_user_one_id, False)
        self.get_detail("Utestuser2", test_user_two_id, False)


        self.update_user("Utestuser1", test_user_one_id)
        self.get_detail("Utestuser1", test_user_one_id, True)

        self.delete_user("Utestuser2", test_user_two_id)
        self.get_list(1)

        # remove test user
        remove_archive(username = "Utestuser1")
        remove_archive(username = "Utestuser2")
        remove_user(username = "Utestuser1")
        remove_user(username = "Utestuser2")
