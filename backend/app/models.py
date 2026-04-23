from app import db
from datetime import datetime

class Essay(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    essay = db.Column(db.Text, nullable=False)
    question = db.Column(db.Text, nullable=False)
    type = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)