const express = require("express");
const {
  createTask,
  getAllTasks,
  getMyTasks,
} = require("../controllers/taskController");

const { protect, authorize } = require("../middleware/auth");
console.log({ createTask, getMyTasks, getAllTasks, protect, authorize });

const router = express.Router(); // ✅ This was missing

router.post("/", protect, createTask);
router.get("/me", protect, getMyTasks);
router.get("/all", protect, authorize(["admin"]), getAllTasks);

module.exports = router;
