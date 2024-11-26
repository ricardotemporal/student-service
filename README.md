# School System - Students Service 🏫

This project is a **college assignment** designed to create a simple and scalable RESTful API for managing student records. The API allows handling student-related information such as creation, retrieval, updating, and deletion, and can be integrated into a school management system.

### ⚙️ Technologies Used:
- **Node.js** 
- **Express** 
- **MongoDB** 

---

## ✨ Features
- 🎓 Create, read, update, and delete student records.
- 📚 Store student details.
- 🌐 Expose API endpoints for integrating with other services.

---

## 🛠️ Installation and Setup

### Prerequisites
Before getting started, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) 
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) 

### Steps to Run Locally

1. **Clone the repository:**

    `git clone https://github.com/yourusername/student-service.git`

2. **Install dependencies:**

    `npm install`

3. **Set up environment variables:**

- Create a .env file at the root of your project and add the following:

    `CONNECTION_STRING=your_mongodb_atlas_connection_string`

4. **Start the development server:**

    `npm run dev`

- The server should now be running on http://localhost:3000.

## 📚 API Endpoints

- `GET` /students – Get a list of all students.
- `GET` /students/:id – Get details of a student by ID.
- `POST` /students – Create a new student.
- `PUT` /students/:id – Update an existing student.
- `DELETE` /students/:id – Delete a student.