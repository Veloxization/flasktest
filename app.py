from flask import Flask
import os

app = Flask(__name__)

@app.route('/')
def home():
    return("""<h1>hewwo</h1>
           <p>you awe wooking at a page OwO</p>""")

if __name__ == "__main__":
    port = os.environ.get('FLASK_PORT') or 8080
    port = int(port)

    app.run(port=port,host='0.0.0.0')