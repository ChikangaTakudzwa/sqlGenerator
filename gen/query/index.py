from flask import Flask

app = Flask(__name__)


@app.route('/')
def query():
    return "Hello, From Query App"

