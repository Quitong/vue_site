from flask import Flask,Response
from json import dumps
from random import randint
app = Flask(__name__)

@app.route("/")
def hello_world():
    
    resp = Response(dumps([
        {"title":"Редиска",'price':5.00},
        {"title":"Олег",'price':51.00},
        {"title":"Артем",'price':23.00},
        ]))
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp
app.run()
