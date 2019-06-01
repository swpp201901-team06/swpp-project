# Account/tests.py
from django.test import TestCase

from FD_backend.inittest import remove_user


class LoginModelTests(TestCase):

    def setUp(self):
        print("Account Test")

    # 회원가입 테스트
    def sign_up(self, username, email):
        link = "/account/registration"
        data = {
            "username": username,
            "email": email,
            "password1": "account!@#$",
            "password2": "account!@#$"
        }
        response = self.client.post(link, data = data)
        self.assertEqual(response.status_code, 201) #created
        print("\tCreate user {0}".format(username))

    # 로그인 테스트
    def sign_in(self, email):
        link = "/account/login/"
        data = {
            "email": email,
            "password": "account!@#$"
        }
        response = self.client.post(link, data = data)
        self.assertEqual(response.status_code, 200) #ok
        print("\tSuccessfully logged in")

    # 로그아웃 테스트
    def sign_out(self):
        link = "/account/logout/"
        response = self.client.post(link)
        self.assertEqual(response.status_code, 200)
        print("\tSuccessfully logged out")

    # 유저 삭제 (초기화)
    def remove_user(self, username):
        try:
            user = CustomUser.objects.get(username = username)
            user.delete()
            print("\tDeleted user {0}".format(username))
        except CustomUser.DoesNotExist:
            pass
        return

    # 전체 테스트
    def test_total_login(self):
        self.sign_up("account1", "accountemail1@test.com")
        self.sign_up("account2", "accountemail2@test.com")
        self.sign_up("account3", "accountemail3@test.com")

        self.sign_out()
        self.sign_in("accountemail1@test.com")
        self.sign_out()
        self.sign_in("accountemail2@test.com")
        self.sign_out()
        self.sign_in("accountemail3@test.com")
        self.sign_out()

        remove_user(username = "account1")
        remove_user(username = "account2")
        remove_user(username = "account3")
