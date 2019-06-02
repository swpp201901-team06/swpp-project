from users.models import CustomUser
from Archive.models import Archive
from Restaurant.models import Restaurant

# 유저 삭제(초기화)
def remove_user(username):
    try:
        user = CustomUser.objects.get(username = username)
        user.delete()
        print("\tDeleted user {0}".format(username))
    except CustomUser.DoesNotExist:
        pass
    return
# 아카이브 삭제(초기화)
def remove_archive(username):
    try:
        archive = Archive.objects.get(user__username = username)
        archive.delete()
        print("\tDeleted archive {0}".format(username))
    except Archive.DoesNotExist:
        pass
    return
# 레스토랑 삭제(초기화)
def remove_restaurant(rName):
    try:
        restaurant = Restaurant.objects.get(rName = rName)
        restaurant.delete()
        print("\tDeleted restaurnat {0}".format(rName))
    except Restaurant.DoesNotExist:
        pass
    return


def create_user(username, email, password):
    test_user = CustomUser.objects.create_user(username = username, email = email, password = password)
    test_user.save()
    print("\tCreate user {0}".format(username))

    return test_user

def create_archive(user):
    test_archive = Archive.objects.create(user = user)
    test_archive.save()
    print("\tCreate {0}'s Archive".format(user.username))

def create_restaurant(rName, rAddress):
    test_restaurant = Restaurant.objects.create(rName = rName, rAddress = rAddress)
    test_restaurant.save()
    print("\tCreate restaurant {0}".format(rName))
