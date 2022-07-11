import requests
import json
from dotenv import dotenv_values

config = dotenv_values("../.env")
url = config['URL'] + "favorite/"

def create(token, _id):
    headers={
        "x-access-token" : token
    }
    r = requests.get(url + _id, headers=headers)
    print("saveBook response: " + r.text, end="\n\n")
    return json.loads(r.text)

def delete(token, _id):
    headers={
        "x-access-token" : token
    }
    r = requests.get(url + 'delete/' + _id, headers=headers)
    print("deleteBook response: " + r.text, end="\n\n")
    return json.loads(r.text)

def myBooks(token):
    headers={
        "x-access-token" : token
    }
    r = requests.get(url, headers=headers)
    print("savedBooks response: " + r.text, end="\n\n")
    return json.loads(r.text)