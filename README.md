# FooDa: 지나간 추억을 다이어리 속 음식과 함께 푸다

## Description

## Installation
Initial installation steps are as follows:
```bash
# Setup and activate virtual environment
sudo apt install virtualenv
virtualenv env
source ./env/bin/activate

# Install Python libraries
sudo pip3 install -r requirements.txt

# Setup backend
cd FD_backend
python3 manage.py makemigrations users
python3 manage.py makemigrations FooDa
python3 manage.py migrate

# Setup frontend
sudo apt install npm
cd ../FD_frontend
npm install google-maps-react
```
In order to run the backend server, follow these steps:
```bash
cd FD_backend # from repo root
python3 manage.py runserver
```
The frontend server can be run as following:
```bash
cd FD_frontend # from repo root
npm start
```

## Progress Reports
- First iteration (~2019/04/22): https://github.com/swpp201901-team06/swpp-project/issues/1
- Second iteration (~2019/05/06): https://github.com/swpp201901-team06/swpp-project/issues/21
