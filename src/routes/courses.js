const express = require("express");
const router = express.Router();

const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  createVideo,
  deleteVideo,
  createCategories,
  deleteCategories,
} = require("../controllers/courses.controllers");


router.get("/", getAllCourses);

router.get("/:id", getCourseById);

router.post("/", createCourse);

router.put("/:id", updateCourse);

router.post("/videos", createVideo);

router.delete("/videos/:id", deleteVideo);

router.post("/categories", createCategories);

router.delete("/categories/:id", deleteCategories);

module.exports = router;