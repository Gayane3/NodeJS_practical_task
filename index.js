import express from 'express';
import booksRoutes from "./routes/books.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use("/books", booksRoutes);

app.get("/", (req, res) => res.send("Welcome to the homepage of my project"));

app.listen(PORT);