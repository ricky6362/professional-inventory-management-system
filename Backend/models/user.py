# User Model
from models.dbconfig import db


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    role = db.Column(db.String(20), nullable=False)  # Admin, Procurement Manager, Normal Employee

    # Define the one-to-many relationship between User and AssetRequest
    asset_requests = db.relationship('AssetRequest', backref='requester', lazy=True)  # A user can have multiple asset requests.