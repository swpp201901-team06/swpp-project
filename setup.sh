#!/bin/bash
sudo apt install -y virtualenv
virtualenv --python=python3.6 env
source ./env/bin/activate

sudo pip3 install -r requirements.txt

cd FD_backend
python3 manage.py makemigrations users
python3 manage.py makemigrations FooDa
python3 manage.py migrate

sudo apt install -y npm
cd ../FD_frontend
npm install
