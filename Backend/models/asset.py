from models.dbconfig import db

class Asset(db.Model):
    __tablename__ = 'assets'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)  # This column should not allow null values
    description = db.Column(db.String(250))
    category = db.Column(db.String(50))
    image_url = db.Column(db.String(200))
    status = db.Column(db.String(20))  # Define asset status (e.g., In Use, Available, Repaired)

    # Define the many-to-one relationship between Asset and User
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='assets')  # An asset belongs to one user (owner).

    # Define the one-to-many relationship between Asset and AssetRequest
    asset_requests = db.relationship('AssetRequest', backref='asset', lazy=True)  # An asset can be requested multiple times.