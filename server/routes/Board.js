const express = require("express");
const router = express.Router();
const Board = require("../models/Board");
const Task = require("../models/Task");

// Get all boards
router.get("/", async (req, res) => {
  try {
    const boards = await Board.find();
    res.json(boards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific board
router.get("/:id", getBoard, (req, res) => {
  res.json(res.board);
});

// Get all boards for a specific user
router.get("/user/:userId", async (req, res) => {
  try {
    const boards = await Board.find({ user: req.params.userId });
    res.json(boards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new board
router.post("/", async (req, res) => {
  const board = new Board({
    title: req.body.title,
    tasks: req.body.tasks,
  });

  try {
    const newBoard = await board.save();
    res.status(201).json(newBoard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a board
router.patch("/:id", getBoard, async (req, res) => {
  if (req.body.title != null) {
    res.board.title = req.body.title;
  }
  if (req.body.tasks != null) {
    res.board.tasks = req.body.tasks;
  }

  try {
    const updatedBoard = await res.board.save();
    res.json(updatedBoard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a board
router.delete("/:id", getBoard, async (req, res) => {
  try {
    await res.board.remove();
    res.json({ message: "Deleted board" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all tasks for a specific board
router.get("/:id/tasks", getBoard, async (req, res) => {
  try {
    const tasks = await Task.find({ board: res.board._id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new task for a specific board
router.post("/:id/tasks", getBoard, async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    board: res.board._id,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

async function getBoard(req, res, next) {
  let board;
  try {
    board = await Board.findById(req.params.id);
    if (board == null) {
      return res.status(404).json({ message: "Cannot find board" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.board = board;
  next();
}

module.exports = router;
