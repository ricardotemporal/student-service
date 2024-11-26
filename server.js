import express from "express";
import dotenv from 'dotenv'; 
import routes from "./src/routes/studentRoute.js";

// Load environment variables from the .env file
dotenv.config();  

const app = express();

/**
 * Initializes the application by configuring the routes and starting the server.
 * The routes defined in 'studentRoute.js' will be loaded here.
 */
routes(app);

/**
 * Starts the server and listens on the port defined by Vercel (process.env.PORT).
 * If the environment variable 'PORT' is not set, it falls back to port 3000.
 */
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
