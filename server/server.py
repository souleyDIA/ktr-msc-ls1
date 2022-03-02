from flask import Flask 
from flask_restx import Api, Resource, reqparse, fields
import json
import bcrypt

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager




app = Flask(__name__)

api = Api(app)

post_profil = reqparse.RequestParser()
post_profil.add_argument('name', type = str, required=True)
post_profil.add_argument('company', type = str, required=True)
post_profil.add_argument('email', type = str, required=False)
post_profil.add_argument('number', type = str, required=False)
post_profil.add_argument('password', type = str, required=True)


profil_login = reqparse.RequestParser()
profil_login.add_argument('id', type = int)
profil_login.add_argument('email', type = str)
profil_login.add_argument('password', type = str)


get_result = {
    'id' : fields.Integer,
    'name': fields.String,
    'company':fields.String,
    'email': fields.String,
    'number': fields.String,
    'password': fields.String
}

get_res = []
my_list = []

def get_hashed_password(plain_text_password):
    # Hash a password for the first time
    #   (Using bcrypt, the salt is saved into the hash itself)
    return bcrypt.hashpw(plain_text_password.encode('utf-8'), bcrypt.gensalt(10))

def check_password(plain_text_password, hashed_password):
    # Check hashed password. Using bcrypt, the salt is saved into the hash itself
    return bcrypt.checkpw(plain_text_password.encode('utf-8'), hashed_password.encode('utf-8'))

class Register(Resource):

    idCounter = 0
    def post(self):
        Register.idCounter += 1
        rec = post_profil.parse_args()
        _name = rec['name']
        _company = rec['company']
        _email = rec['email']
        _number = rec['number']
        _password = rec['password']
        #create hashed password 
        hashed_password = get_hashed_password(_password)
        dict_ = {'id': Register.idCounter, 'name': _name, 'company': _company, 'email': _email , 'number': _number, 'password': hashed_password.decode('utf8')}

        my_list.append(dict_)
        db = open('data.json', "w+")
        json.dump(my_list, db)
        db.close()
        return {'register': True}, 201

class Login(Resource):
 
    idCounter = 0
    def post(self):
        data=json.load(open("data.json"))
        rec = profil_login.parse_args()
        email = rec['email']
        password =  rec["password"]
        for user in data:
               _check_password = check_password(password, user["password"])

               if user["email"] == email and _check_password:
                     # Here generate token for each user
                     return {"access_token": True}, 200
               else: 
                     return {"message": "Bad user or Password"}, 401

api.add_resource(Register, '/register')
api.add_resource(Login, '/login')


if __name__ == '__main__':
   app.run(host='0.0.0.0', port=5000, debug=True)