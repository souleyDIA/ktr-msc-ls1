
from pymongo import MongoClient
# pprint library is used to make the output look more pretty
from pprint import pprint
CONNECTION_STRING = ''
# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
client = MongoClient(CONNECTION_STRING)
db=client.admin
# Issue the serverStatus command and print the results

def initialize_db(app):
    db.init_app(app)