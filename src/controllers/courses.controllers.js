const CoursesServices = require("../services/courses.services");
// const jwt = require("jsonwebtoken");

// token : eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im51ZXZvQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiTnVldm8gVXN1YXJpbyIsImlkIjo3LCJpYXQiOjE2NjgyMTY2Njh9.GxAbsbFpM-OIBNSOtFbnStW3xWZ6wCFJMGFkXKRrAIAgbZHG2jQGFiKNsl2p_wCKrPPnL2HjfWj7881VUqPYdQ
const getAllCourses = async (req, res, next) => {
  try {
    const result = await CoursesServices.getAll();
    console.log(result)
    res.status(200).json(result);
  } catch (error) {
    next({
      message: "no se pudieron obtener las tareas",
      status: 400,
      errorContent: error,
    });
  }
}
const getCourseById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await CoursesServices.getByCourseId(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      message: "no se pudieron obtener las tareas",
      status: 400,
      errorContent: error,
    });
  }
};

const createCourse = async (req, res, next) => {
  try {
    const course = req.body;
    const result = await CoursesServices.create(course);
    res.status(201).json({ message: "El curso ha sido creado exitosamente" });
  } catch (error) {
    next({
      message: "Algo salio mal al crear la tarea",
      status: 400,
      errorContent: error,
    });
  }
};

const updateCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const result = await CoursesServices.updateStatus(id, description);
    res.status(200).json({ message: "Curso actualizado" });
  } catch (error) {
    next({
      message: "No se ha podido actualizar la tarea",
      status: 400,
      error: error,
    });
  }
};

const createVideo = async (req, res, next) => {
  try {
    const video = req.body;
    const result = await CoursesServices.videoPost(video);
    res.status(200).json(result)
  } catch (error) {
    next({
      message: "No se ha podido actualizar la tarea",
      status: 400,
      error: error,
    });
  }
};
const deleteVideo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await CoursesServices.videoDelete(id);
    res.status(200).json(result)
  } catch (error) {
    next({
      message: "No se ha podido actualizar la tarea",
      status: 400,
      error: error,
    });
  }
};

const createCategories = async (req, res, next) => {
  try {
    const categories = req.body;
    const result = await CoursesServices.categoriesPost(categories);
    res.status(200).json(result)
  } catch (error) {
    next({
      message: "No se ha podido actualizar la tarea",
      status: 400,
      error: error,
    });
  }
};

const deleteCategories = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await CoursesServices.categoriesDelete(id);
    res.status(200).json(result)
  } catch (error) {
    next({
      message: "No se ha podido actualizar la tarea",
      status: 400,
      error: error,
    });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  createVideo,
  deleteVideo,
  createCategories,
  deleteCategories,
};
