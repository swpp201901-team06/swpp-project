#!/bin/bash
sudo apt install -y virtualenv
virtualenv env
source ./env/bin/activate

sudo pip3 install django==2.2.1
sudo pip3 install djangorestframework==3.9.3
sudo pip3 install coverage==4.5.3
sudo pip3 install requests==2.21.0
sudo pip3 install django-cors-headers==2.5.3
sudo pip3 install django-tagging==0.4.6
sudo pip3 install django-hitcount==1.3.0
sudo pip3 install django-rest-auth==0.9.5
sudo pip3 install django-allauth==0.39.1

cd FD_backend
python3 manage.py makemigrations users
python3 manage.py makemigrations FooDa
python3 manage.py migrate

sudo apt install -y npm
cd ../FD_frontend
npm install
