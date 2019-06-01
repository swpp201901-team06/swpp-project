# Archive/tests.py
from django.test import TestCase
from .models import Archive
from users.models import CustomUser

class ArchiveTests(TestCase):

    def setUp(self):
        # Create two users
        test_user1 = CustomUser.objects.create_user(username = "Atestuser1", email = "Atestemail1@test.com", password = "testpassword!@#$")
        test_user2 = CustomUser.objects.create_user(username = "Atestuser2", email = "Atestemail2@test.com", password = "testpassword!@#$")
        test_user1.save()
        test_user2.save()

        print("\tCreate user Atestuser1")
        print("\tCreate user Atestuser2")


    def remove_user(self, username):
        try:
            user = CustomUser.objects.get(username = username)
            user.delete()
            print("\tDeleted user {0}".format(username))
        except CustomUser.DoesNotExist:
            pass
        return

    def remove_archive(self, username):
        try:
            archive = Archive.objects.get(user__username = username)
            archive.delete()
            print("\tDeleted archive {0}".format(username))
        except Archive.DoesNotExist:
            pass
        return


    def get_archive_list(self):
        link = "/archive/list"
        response = self.client.get(link)
        dict_list = response.json()

        self.assertEqual(dict_list[0]['user'],'Atestuser1')
        self.assertEqual(dict_list[1]['user'],'Atestuser2')
        self.assertEqual(response.status_code, 200)

#update number every test
#u should change auth email with who don't have archive
    def post_archive(self, email):
        link = "/archive/list"
        self.client.login( email = email, password = 'testpassword!@#$')
        data = {}
        response = self.client.post(link, data = data)
        self.assertEqual(response.status_code, 201)
        print("\tCreate archive {0}",format(email))


    def test_total_archive(self):
        self.post_archive("Atestemail1@test.com")
        self.post_archive("Atestemail2@test.com")
        self.get_archive_list()
        # remove test user
        self.remove_archive("Atestuser1")
        self.remove_archive("Atestuser2")
        self.remove_user("Atestuser1")
        self.remove_user("Atestuser2")
