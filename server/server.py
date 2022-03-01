from flask import Flask
from database.db import initialize_db
from database.model import User

app = Flask(__name__)

@app.route('/profil', methods=['POST'])
def profil():
   return {'profil': ['name1', 'name2', 'name3']}

if __name__ == '__main__':
    app.run(debug=True)