import express from 'express';
import { getAllUsers, getUser, addNewUser, updateUser, deleteUser } from '../controllers/books.js';

var router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", addNewUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;