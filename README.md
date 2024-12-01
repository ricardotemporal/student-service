# School System - Students Service 🏫

This project is a **college assignment** designed to create a simple and scalable RESTful API for managing student records. The API allows handling student-related information such as creation, retrieval, updating, and deletion, and can be integrated into a school management system.

### ⚙️ Technologies Used:

-   **Node.js**
-   **Express**
-   **MongoDB Atlas**
-   **Vercel** 
-   **Fetch**

----------

## ✨ Features

-   🎓 Create, read, update, and delete student records.
-   📚 Store student details.
-   🌐 Expose API endpoints for integrating with other services.
-   🚀 Deployed on Vercel for easy access and scalability.

----------

## 🛠️ Installation and Setup

### Prerequisites

Before getting started, ensure you have the following installed:

-   [Node.js](https://nodejs.org/en/)
-   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Steps to Run Locally

1.  **Clone the repository:**
    
    `git clone https://github.com/ricardotemporal/student-service.git` 
    
2.  **Install dependencies:**

    `npm install` 
    
4.  **Set up environment variables:**
    
-   Create a `.env` file at the root of your project and add the following:
 
    `CONNECTION_STRING=your_mongodb_atlas_connection_string`

5.  **Start the development server:**
    
    `npm run dev` 
    
-   The server should now be running on [http://localhost:3000](http://localhost:3000).

6.  **Start the production server locally (optional):**
    
    `npm run start` 
    
-   This command runs the production build to simulate the live environment.

### Deployment

The project is deployed using **Vercel**. Every push to the `main` branch automatically triggers a new deployment.

----------

## 📚 API Endpoints

-   `GET` /students – Get a list of all students.
-   `GET` /students/:id – Get details of a student by ID, including grades and class information.
-   `POST` /students – Create a new student.
-   `PUT` /students/:id – Update an existing student.
-   `DELETE` /students/:id – Delete a student.

## 📝 Notes

-   Ensure your `.env` file is added to `.gitignore` to avoid exposing sensitive information.
-   The `vercel.json` file is configured to deploy this service seamlessly with Vercel.
-   This API is designed for easy integration with other school management system components, including grading and class management systems.