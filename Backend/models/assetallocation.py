# AssetAllocation Model
from models.dbconfig import db

class AssetAllocation(db.Model):
    __tablename__ = 'asset_allocations'

    id = db.Column(db.Integer, primary_key=True)
    asset_id = db.Column(db.Integer, db.ForeignKey('assets.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  # Corrected to lowercase 'false'
    allocation_date = db.Column(db.DateTime)
    deallocation_date = db.Column(db.DateTime)