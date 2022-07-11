import requests
import json
from dotenv import dotenv_values

config = dotenv_values("../.env")
url = config['URL'] + 'user'

def register():
    obj = {
        "fullName":"michele",
        "email":"mikymattiello@live.com",
        "password":"Computer2001",
    }
    r = requests.post(url + "/register/", json=obj)
    print("registration response: " + r.text, end="\n\n")

def login():
    obj = {
        "fullName":"michele",
        "email":"mikymattiello@live.com",
        "password":"Computer2001",
    }
    r = requests.post(url + "/login/", json=obj)
    print("login response: " + r.text, end="\n\n")
    if(r.status_code==200):
        return json.loads(r.text)["token"]
    else:
        return ""