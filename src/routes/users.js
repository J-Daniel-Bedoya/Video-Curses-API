const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  getUserWithCourses,
  // getUserWithCourses2,
  createUser,
  updateUser,
} = require("../controllers/users.controllers");


router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.get("/:id/courses", getUserWithCourses);

// router.get("/users/:id/courses2", getUserWithCourses2);

router.post("/", createUser);

router.put("/:id", updateUser);

module.exports = router;