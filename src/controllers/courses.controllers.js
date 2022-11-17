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
// }
// const getCourseByUserId = async (req, res, next) => {
//   try {
//     const { userId } = req.params;
//     const result = await CoursesServices.getByCourseId(userId);
//     res.status(200).json(result);
//   } catch (error) {
//     next({
//       message: "no se pudieron obtener las tareas",
//       status: 400,
//       errorContent: error,
//     });
//   }
// };

// /* 
//   {
//     task: {idUser, title, description}, 
//     categories: [1, 4]
//   }
// */

// const createCourse = async (req, res, next) => {
//   try {
//     const { course, categories } = req.body;
//     const result = await CoursesServices.create(course, categories);
//     res.status(201).json({ result, message: "La tarea ha sido creada" });
//   } catch (error) {
//     next({
//       message: "Algo salio mal al crear la tarea",
//       status: 400,
//       errorContent: error,
//     });
//   }
// };

// const completeCourse = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const result = await CoursesServices.updateStatus(id);
//     res.status(200).json({ result, message: "Tarea actualizada" });
//   } catch (error) {
//     next({
//       message: "No se ha podido actualizar la tarea",
//       status: 400,
//       error: error,
//     });
  // }
};

module.exports = {
  getAllCourses,
  // getCourseByUserId,
  // createCourse,
  // completeCourse
};
