sudo apt install -y virtualenv
virtualenv env
source ./env/bin/activate

sudo pip install django
sudo pip install djangorestframework
sudo pip install coverage
sudo pip install requests
sudo pip install django-cors-headers
sudo pip install django-tagging
sudo pip install django-hitcount
sudo pip install django-rest-auth
sudo pip install django-allauth

cd FD_backend
python3 manage.py makemigrations users
python3 manage.py makemigrations FooDa
python3 manage.py migrate

sudo apt install -y npm
cd ../FD_frontend
npm install