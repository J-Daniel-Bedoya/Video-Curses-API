const { Router } = require("express");

const {
  getAllCourses,
  getCourseById,
  getCoursesWithCategoriesVideos,
  createCourse,
  updateCourse,
} = require("../Controllers/users.controllers");

const router = Router();

// para obtener a todos los usuarios --> get
router.get("/courses", getAllCourses);

// obtener un usuario por su id
// /users/:id
router.get("/courses/:id", getCourseById);

router.get("/courses/:id/categories_and_videos", getCoursesWithCategoriesVideos);

router.post("/courses", createCourse);

router.put("/courses/:id", updateCourse);

module.exports = router;