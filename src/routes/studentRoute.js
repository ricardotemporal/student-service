import express from "express";
import cors from "cors";
import { listStudents, getStudentById, createNewStudent, updateStudentDetails, deleteStudentById } from "../controllers/studentController.js";

// Configuring CORS options
const corsOptions = {
    origin: "http://localhost:8000", 
    optionsSuccessStatus: 200
};

/**
 * Configures the application routes.
 * 
 * @param {Object} app - The Express application instance.
 */
const routes = (app) => {
    
    app.use(cors(corsOptions));
    app.use(express.json());

    /**
     * GET /students
     * Route to list all students.
     */
    app.get("/students", listStudents);

    /**
     * GET /students/:id
     * Route to get a specific student by ID.
     * 
     * @param {string} id - The ID of the student.
     */
    app.get("/students/:id", getStudentById);

    /**
     * POST /students
     * Route to create a new student.
     */
    app.post("/students", createNewStudent);

    /**
     * PUT /students/:id
     * Route to update an existing student by ID.
     * 
     * @param {string} id - The ID of the student to update.
     */
    app.put("/students/:id", updateStudentDetails);

    /**
     * DELETE /students/:id
     * Route to delete a specific student by ID.
     */
    app.delete("/students/:id", deleteStudentById);
};

export default routes;
