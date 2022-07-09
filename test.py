import requests
import json

url = "http://127.0.0.1:3000/book"

def create():
    obj={
        "isbn":"9788839534187",
        "titolo":"Il pensiero che conta. Per i Licei e gli Ist. magistrali. La filosofia contemporanea (Vol. 3)",
        "condizione":1,
        "prezzo":8.00,
        "venditore":"Riccardo Codroico Luceri",
        "numero":"3773795291",
        "whatsapp":"https://api.whatsapp.com/send?phone=3773795283&text=ciao%20sono%20interessato%20ad%20il%20tuo%20libro",
        "immagine":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Baedeker_1910.jpg/800px-Baedeker_1910.jpg",
    }
    r = requests.post(url, json=obj)
    print(r.text)

def getBookByIsbn():
    id="9788839534187"

    r = requests.get(url + '/' + id)
    print(r.text)


def deleteBookByIsbn():
    id="9788839534187"

    r = requests.get(url + '/delete/' + id)
    print(r.text)


if __name__ in '__main__':
    #create()
    #getBookByIsbn()
    #deleteBookByIsbn()