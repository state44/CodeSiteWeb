from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def pixel_art():
    return render_template('premierepage.html')

if __name__ == '__main__':
    app.run()
