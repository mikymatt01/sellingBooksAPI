import requests
import json
from test import url
url = url + 'user'

def register():
    obj = {
        "fullName":"michele",
        "email":"mikymattiello@live.com",
        "password":"Computer2001",
    }
    r = requests.post(url + "/register/", json=obj)
    print(r.text)

def login():
    obj = {
        "fullName":"michele",
        "email":"mikymattiello@live.com",
        "password":"Computer2001",
    }
    r = requests.post(url + "/login/", json=obj)
    if(r.status_code==200):
        return json.loads(r.text)["token"]
    else:
        return ""