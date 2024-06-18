# To-Do List Application

## Description
A simple To-Do List application with Django backend and React frontend.

## Technologies Used
- Frontend: React
- Backend: Django, Django REST framework
- Database: SQLite (default with Django)

## Installation

### Backend
1. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`

2. Install required packages:

   ```bash
   cd project_backend
   pip install requirements.txt

3. Navigate to the backend directory and apply migrations:

   ```bash
   python manage.py migrate

4. Start the backend server:

   ```bash
   python manage.py runserver

### Frontend

1. Navigate to the frontend directory and install dependencies:

   ```bash
   cd frontend
   npm install

2. Start the frontend development server:

   ```bash
   npm start

## Features

* HomePage
* LoginPage
* SignupPage
* Add new tasks
* Edit existing tasks
* Delete tasks
* Mark tasks as completed/uncompleted
