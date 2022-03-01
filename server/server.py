from flask import Flask
app = Flask(__name__)

@app.route('/profil')
def profil():
   return {'profil': ['name1', 'name2', 'name3']}

if __name__ == '__main__':
    app.run(debug=True)