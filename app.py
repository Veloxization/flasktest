from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return("""<h1>hewwo</h1>
           <p>you awe wooking at a page OwO</p>""")

if __name__ == "__main__":
    app.run(debug=False)