# IELTS Essay Backend API 

This is a Flask backend for an IELTS essay practice website.

## Tech Stack
- Flask
- MySQL (XAMPP)
- SQLAlchemy

## Features
- Submit essay (POST /submit)
- Get all submissions (GET /submissions)

## How to Run

1. Clone the repo
2. Create virtual environment
3. Install dependencies:

pip install flask flask_sqlalchemy pymysql flask-cors

4. Start XAMPP (Apache + MySQL)

5. Create database:
essay_db

6. Run the app:

python run.py

Server runs on:
http://127.0.0.1:5000

## API Endpoints

### POST /submit
Send:
{
  "essay": "text",
  "question": "text",
  "type": "opinion"
}

### GET /submissions
Returns all essays

---

Built by Abdulkareem Muflihudeen 
