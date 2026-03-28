
# 📝 Task Manager API

A simple Task Management REST API built using Node.js, Express, and MongoDB.

---

## 🚀 Features

* Create a task
* Get all tasks
* Update task details
* Mark task as completed
* Delete a task
* Validation and error handling

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📁 Project Structure

task-manager/
│
├── models/ # Database schemas
├── controllers/ # Business logic
├── routes/ # API routes
├── config/ # Database connection
├── .env # Environment variables
├── server.js # Entry point

---

## ⚙️ Installation & Setup

1. Clone the repository

git clone https://github.com/your-username/task-manager.git

2. Navigate to project

cd task-manager

3. Install dependencies

npm install

4. Create .env file

MONGO_URI=your_mongodb_connection

5. Run server

npm run dev

---

## 📡 API Endpoints

### Create Task

POST /api/tasks

### Get All Tasks

GET /api/tasks

### Update Task

PUT /api/tasks/:id

### Mark Complete

PATCH /api/tasks/:id/complete

### Delete Task

DELETE /api/tasks/:id

---

## ⚠️ Validation Rules

* Title is required
* Cannot mark already completed task again

---

## 📌 Future Improvements

* Add due dates
* Add categories
* Add authentication

---

## 👨‍💻 Author

Vivek Gupta
