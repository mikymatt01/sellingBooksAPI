import requests
import json
from dotenv import dotenv_values

config = dotenv_values("../.env")
url = config['URL'] + 'book'

def create(token):
    obj={
        "isbn":"9788839534187",
        "titolo":"Il pensiero che conta. Per i Licei e gli Ist. magistrali. La filosofia contemporanea (Vol. 3)",
        "condizione":1,
        "prezzo":8.00,
        "numero":"3773795291",
        "whatsapp":"https://api.whatsapp.com/send?phone=3773795283&text=ciao%20sono%20interessato%20ad%20il%20tuo%20libro",
        "immagine":{
            "nome":"51i6HFux76L._SL160_",
            "contenuto":"data:image/jpeg;base64,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",
        }
    }
    headers={
        "x-access-token" : token
    }
    r = requests.post(url, json=obj, headers=headers)
    print("createBook response: " + r.text, end="\n\n")
    return json.loads(r.text)

def getBookByIsbn():
    id="9788839534187"

    r = requests.get(url + '/' + id)
    print("bookByIsbn response: " + r.text, end="\n\n")
    return json.loads(r.text)

def deleteBookById(token):
    id="9788839534187"
    headers={
        "x-access-token" : token
    }
    r = requests.get(url + '/delete/' + id, headers=headers)
    print("deleteBook response: " + r.text, end="\n\n")
    return json.loads(r.text)

def myBooks(token):
    id="9788839534187"
    headers={
        "x-access-token" : token
    }
    r = requests.get(url + '/', headers=headers)
    print("myBook response: " + r.text, end="\n\n")
    return json.loads(r.text)

def update(token, _id):
    obj={
        "prezzo":8.50,
    }
    headers={
        "x-access-token" : token
    }
    r = requests.post(url + '/update/' + _id, json=obj, headers=headers)
    print("updateBook response: " + r.text, end="\n\n")
    return json.loads(r.text)