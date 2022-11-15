const { Router } = require("express");

const {
  getAllUsers,
  getUserById,
  getUserWithCourses,
  // getUserWithCourses2,
  createUser,
  updateUser,
} = require("../Controllers/users.controllers");

const router = Router();

// para obtener a todos los usuarios --> get
router.get("/users", getAllUsers);

// obtener un usuario por su id
// /users/:id
router.get("/users/:id", getUserById);

router.get("/users/:id/courses", getUserWithCourses);

// router.get("/users/:id/courses2", getUserWithCourses2);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

module.exports = router;