from flask import Blueprint, request, jsonify
from app import db
from app.models import Essay

main = Blueprint('main', __name__)

@main.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()

    new_essay = Essay(
        essay=data.get('essay'),
        question=data.get('question'),
        type=data.get('type')
    )

    db.session.add(new_essay)
    db.session.commit()

    return jsonify({"message": "Submission successful"})
    

@main.route('/submissions', methods=['GET'])
def get_all():
    essays = Essay.query.all()

    return jsonify([
        {
            "id": e.id,
            "essay": e.essay,
            "question": e.question,
            "type": e.type,
            "created_at": e.created_at
        } for e in essays
    ])