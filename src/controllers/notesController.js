import { nanoid } from "nanoid";

const notes = [];

export class NotesController {
  static async getAllNotes(req, res, next) {
    res.status(200).json({
      status: "success",
      message: "",
      data: notes,
    });
  }
  static async getNoteById(req, res, next) {
    const { id } = req.params;

    const note = notes.filter((n) => n.id === id)[0];

    if (note != undefined) {
      res.status(200).json({
        status: "success",
        data: {
          note,
        },
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "Catatan tidak ditemukan",
      });
    }
  }
  static async postNote(req, res, next) {
    const { title, tags, content } = req.body;

    const id = nanoid(16);
    const createdAt = new Date().toDateString();
    const updatedAt = createdAt;

    const newNote = {
      id,
      title,
      tags,
      content,
      createdAt,
      updatedAt,
    };
    notes.push(newNote);
    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
      res.status(201).json({
        status: "success",
        data: {
          noteId: id,
        },
      });
    } else {
      res.status(401).json({
        status: "fail",
        message: "catatan gagal ditambahkan",
      });
    }
  }
  static async updateNote(req, res, next) {
    const { id } = req.params;

    const { title, tags, content } = req.body;
    const updatedAt = new Date().toISOString();
    const index = notes.findIndex((note) => note.id === id);

    if (index !== -1) {
      notes[index] = {
        ...notes[index],
        title,
        tags,
        content,
        updatedAt,
      };

      res.status(200).json({
        status: "success",
        data: {
          notes: notes[index],
        },
      });
    } else {
      res.status(400).json({
        status: "fail",
        message: "gagal update catatan",
      });
    }
  }
  static async deleteNote(req, res, next) {
    const id = req.params;

    const index = notes.findIndex((note) => note.id === id);

    if (index !== -1) {
      notes.splice(index, 1);

      res.status(200).json({
        status: "success",
        message: "catatan berhasil dihapus",
      });
    } else {
      res.status(400).json({
        status: "fail",
        message: "Catatan gagal dihapus",
      });
    }
  }
}
