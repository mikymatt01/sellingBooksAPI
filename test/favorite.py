import requests
import json

url = "http://127.0.0.1:8080/favorite"

def create(token, id):
    obj={
        "id":id,
    }
    headers={
        "x-access-token" : token
    }
    r = requests.post(url, json=obj, headers=headers)
    print(r.text)

def myBooks(token):
    headers={
        "x-access-token" : token
    }
    r = requests.get(url, headers=headers)
    print(r.text)