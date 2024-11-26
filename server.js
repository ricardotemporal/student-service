import express from "express";
import routes from "./src/routes/studentRoute.js";

const app = express();

/**
 * Initializes the application by configuring routes and starting the server.
 */
routes(app);

/**
 * Starts the server and listens on the port defined by Vercel (process.env.PORT).
 * Fallbacks to port 3000 if the environment variable is not set.
 */
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
