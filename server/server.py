from flask import Flask, Request, Response
from flask_restx import Api, Resource, reqparse, fields
import json
app = Flask(__name__)

api = Api(app)

post_profil = reqparse.RequestParser()
post_profil.add_argument('id', type = int)
post_profil.add_argument('name', type = str, required=True)
post_profil.add_argument('company', type = str, required=True)
post_profil.add_argument('email', type = str, required=False)
post_profil.add_argument('number', type = str, required=False)
post_profil.add_argument('password', type = str, required=True)


profil_get_args = reqparse.RequestParser()
profil_get_args.add_argument('id', type = int)
profil_get_args.add_argument('token', type = str)


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
        dict_ = {'id': Register.idCounter, 'name': _name, 'company': _company, 'email': _email , 'number': _number, 'password': _password}
        my_list.append(dict_)
        db = open('data.json', "w+")
        json.dump(my_list, db)
        db.close()
        return {'register': True}, 201


api.add_resource(Register, '/register')

if __name__ == '__main__':
   app.run(host='0.0.0.0', port=5000, debug=True)