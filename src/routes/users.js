const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  getUserWithCourses,
  postUserWithCourses,
  createUser,
  updateUser,
} = require("../controllers/users.controllers");


router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.get("/:id/courses", getUserWithCourses);

router.post("/", createUser);

router.put("/:id", updateUser);

router.post("/:userId", postUserWithCourses);

module.exports = router;