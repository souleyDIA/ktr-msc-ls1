from .db import db

class User(db.Document):
    name = db.StringField(required=True, unique=True)
    company = db.StringField(required=True, unique=True)
    email = db.StringField(required=False, unique=True)
    number = db.StringField(required=False, unique=True)
