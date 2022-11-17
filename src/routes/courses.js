const express = require("express");
const router = express.Router();

const {
  getAllCourses,
  // getCourseById,
  // getCoursesWithCategoriesVideos,
  // createCourse,
  // updateCourse,
} = require("../controllers/courses.controllers");


router.get("/", getAllCourses);

// router.get("/:id", getCourseById);

// router.get("/:id/categories_and_videos", getCoursesWithCategoriesVideos);

// router.post("/", createCourse);

// router.put("/:id", updateCourse);

module.exports = router;