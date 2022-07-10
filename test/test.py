import requests
import json

import book
import user
import favorite

url = "http://127.0.0.1:8080/"


if __name__ in '__main__':
    #user.register()
    token=user.login()
    #book.create(token)
    #book.myBooks(token)
    #book.getBookByIsbn()
    #book.deleteBookByIsbn(token)
    favorite.books()