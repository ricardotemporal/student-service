import fetch from 'node-fetch';
import { getAllStudents, getStudent, createStudent, updateStudent, deleteStudent } from "../models/studentModel.js";

/**
 * Controller function to list all students.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {void} Sends a JSON response with the list of students.
 */
export async function listStudents(req, res) {
    try {
        const students = await getAllStudents();
        res.status(200).json(students);
    } catch (error) {
        console.error("Error fetching students:", error.message);
        res.status(500).json({ error: "Failed to fetch students" });
    }
}

/**
 * Controller function to fetch a student by ID, including their grades.
 * 
 * @param {Object} req - The HTTP request object containing the student ID in `req.params.id`.
 * @param {Object} res - The HTTP response object.
 * @returns {void} Sends a JSON response with the student data and grades.
 */
export async function getStudentById(req, res) {
    const id = req.params.id;
    try {
        const student = await getStudent(id);
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }

        const gradesUrl = `https://microservico-notas.onrender.com/notas?aluno_id=${id}`;
        const gradesResponse = await fetch(gradesUrl);
        const grades = await gradesResponse.json();

        const filteredGrades = grades
            .filter((grade) => grade.aluno_id === id) // Keep only the current student's grades
            .map(({ notaProva, notaTrabalho, notaFinal, status }) => ({
                notaProva,
                notaTrabalho,
                notaFinal,
                status,
            }));

        const classUrl = `https://microservico-turma-1.onrender.com/turmas?aluno_id=${id}`;
        const classResponse = await fetch(classUrl);
        const turmaData = await classResponse.json();
        const turma = turmaData?.turma || "No class assigned"; 

        const response = {
            ...student,
            grades: filteredGrades, 
            turma
        };
        
        res.status(200).json(response);
    } catch (error) {
        console.error("Error fetching student by ID:", error.message);
        res.status(500).json({ error: "Failed to fetch student by ID" });
    }
}

/**
 * Controller function to create a new student.
 * 
 * @param {Object} req - The HTTP request object containing the student data in `req.body`.
 * @param {Object} res - The HTTP response object.
 * @returns {void} Sends a JSON response with the created student data.
 */
export async function createNewStudent(req, res) {
    const newStudent = req.body;
    try {
        const studentCreated = await createStudent(newStudent);
        res.status(201).json(studentCreated);
    } catch (error) {
        console.error("Error creating student:", error.message);
        res.status(500).json({ error: "Failed to create student" });
    }
}

/**
 * Controller function to update an existing student.
 * 
 * @param {Object} req - The HTTP request object containing the updated student data in `req.body`.
 * @param {Object} res - The HTTP response object.
 * @returns {void} Sends a JSON response with the updated student data.
 */
export async function updateStudentDetails(req, res) {
    const id = req.params.id;
    const updatedStudent = req.body;
    try {
        const studentUpdated = await updateStudent(id, updatedStudent);
        res.status(200).json(studentUpdated);
    } catch (error) {
        console.error("Error updating student:", error.message);
        res.status(500).json({ error: "Failed to update student" });
    }
}

/**
 * Controller function to delete a student.
 * 
 * @param {Object} req - The HTTP request object containing the ID of the student to delete in `req.params.id`.
 * @param {Object} res - The HTTP response object.
 * @returns {void} Sends a JSON response with the result of the deletion.
 */
export async function deleteStudentById(req, res) {
    const id = req.params.id;
    try {
        const result = await deleteStudent(id);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error deleting student:", error.message);
        res.status(500).json({ error: "Failed to delete student" });
    }
}
