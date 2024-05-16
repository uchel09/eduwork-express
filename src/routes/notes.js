import express from "express";
import { NotesController } from "../controllers/notesController.js";

export const notesRouter = express.Router();

notesRouter.put("/:id", NotesController.updateNote);
notesRouter.delete("/:id", NotesController.deleteNote);
notesRouter.get("/note/:id", NotesController.getNoteById);
notesRouter.get("/", NotesController.getAllNotes);
notesRouter.post("/", NotesController.postNote);

// publicRouter.post("/api/users/login", UserController.login);
