from flask import Blueprint, request, jsonify
from app import db
from app.models import Essay

main = Blueprint("main", __name__)

# SUBMIT ESSAY
@main.route("/submit", methods=["POST"])
def submit_essay():

    data = request.get_json()

    new_essay = Essay(
        essay=data.get("essay"),
        question=data.get("question"),
        type=data.get("type"),
        user_id=data.get("user_id")
    )

    db.session.add(new_essay)
    db.session.commit()

    return jsonify({
        "message": "Essay submitted successfully"
    })


# GET USER ESSAYS
@main.route("/submissions", methods=["GET"])
def get_submissions():

    user_id = request.args.get("user_id")

    essays = Essay.query.filter_by(user_id=user_id).all()

    results = []

    for essay in essays:
        results.append({
            "id": essay.id,
            "essay": essay.essay,
            "question": essay.question,
            "type": essay.type,
            "user_id": essay.user_id
        })

    return jsonify(results)