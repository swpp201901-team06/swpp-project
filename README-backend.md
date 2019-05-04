# swpp-project - BackEnd

First, you should type makemigrations and migrate ( dbsqlite is not exist )

Here is the url list for login, logout, sign up

----------------------------------------------------------------

-UserList

http://127.0.0.1:8000/api/users/

----------------------------------------------------------------


*first method


-Login Logout

http://127.0.0.1:8000/api/rest-auth/login/

http://127.0.0.1:8000/api/rest-auth/logout/

-Sign up

http://127.0.0.1:8000/api/rest-auth/registration/

----------------------------------------------------------------

*Second Method

-Login Logout

http://127.0.0.1:8000/api/accounts/login/

http://127.0.0.1:8000/api/accounts/logout/

-Sign up

http://127.0.0.1:8000/api/accounts/signup/


_________________________________________________________________


Here is the url for check Existence of Username & Email (used when sign up)

_________________________________________________________________

-Check Existence of Username & Email

http://127.0.0.1:8000/api/users/exists/username/[username]

http://127.0.0.1:8000/api/users/exists/email/[email]

_______________________________________________________________________

Here is the url for get username(nickname) by using email (used when after sign in)
_______________________________________________________________________

-Get Username(nickname) using email

http://127.0.0.1:8000/api/users/get-nickname/[email]

