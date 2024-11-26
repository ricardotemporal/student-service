import { ObjectId } from "mongodb";
import connectToDatabase from "../config/dbConfig.js";

// Estabelece a conexão com o banco de dados
const connection = await connectToDatabase(process.env.CONNECTION_STRING);

/**
 * Fetches all students from the "students" collection in the database.
 * 
 * @returns {Promise<Array>} An array containing all students from the database.
 */
export async function getAllStudents() {
    const db = connection.db("school-system");
    const collection = db.collection("students");
    return collection.find().toArray();
}

/**
 * Fetches a single student by ID from the "students" collection.
 * 
 * @param {string} id - The ID of the student to fetch.
 * @returns {Promise<Object>} The student data or null if not found.
 */
export async function getStudent(id) {
    const db = connection.db("school-system");
    const collection = db.collection("students");
    const objID = new ObjectId(id);
    return collection.findOne({ _id: objID });
}

/**
 * Creates a new student in the "students" collection.
 * 
 * @param {Object} newStudent - The data for the new student.
 * @returns {Promise<Object>} The result of the insert operation, including the inserted ID.
 */
export async function createStudent(newStudent) {
    const db = connection.db("school-system");
    const collection = db.collection("students");
    return collection.insertOne(newStudent);
}

/**
 * Updates an existing student in the "students" collection.
 * 
 * @param {string} id - The ID of the student to update.
 * @param {Object} updatedStudent - The new data to update the student.
 * @returns {Promise<Object>} The result of the update operation.
 */
export async function updateStudent(id, updatedStudent) {
    const db = connection.db("school-system");
    const collection = db.collection("students");
    const objID = new ObjectId(id);
    return collection.updateOne({ _id: objID }, { $set: updatedStudent });
}

/**
 * Deletes a student from the "students" collection.
 * 
 * @param {string} id - The ID of the student to delete.
 * @returns {Promise<Object>} The result of the delete operation.
 */
export async function deleteStudent(id) {
    const db = connection.db("school-system");
    const collection = db.collection("students");
    const objID = new ObjectId(id);
    return collection.deleteOne({ _id: objID });
}


