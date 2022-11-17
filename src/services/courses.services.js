const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");


class CoursesServices {
  static async getAll() {
    try {
      const result = await Courses.findAll({
        attributes: {
          exclude: ["categories_id", "categorieId", "createdAt", "updatedAt"]
        },
        include: {
          model: Categories,
          attributes: ["name"],
        },
        include: {
          model: Videos,
          attributes: {
            exclude: ["courses_id", "coursesId"]
          }
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getByCourseId(id) {
    try {
      const result = await Courses.findAll({
        where: { id },
        attributes: {
          include: { 
            course: ["categorieId", "categories_id", "createdAt", "updatedAt"],
            include: {
              model: Categories,
              attributes: ["name"],
            },
          }
          
        },

        include: {
          model: Videos,
          attributes: {
            exclude: ["courses_id", "coursesId"]
          }
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(course) {
    try {
      const result = await Courses.create(course);
      return result;
      // devuelve es un objeto con la tarea creada {id, title, description, isComplete, creat, uptade}
      // const { id } = taskResult;
      // categories.forEach(
      //   async (category) =>
      //     await TaskCategories.create({ categoryId: category, taskId: id })
      // );
    } catch (error) {
      throw error;
    }
  }

  // static async updateStatus(id) {
  //   try {
  //     const result = await Tasks.update(
  //       { isComplete: true },
  //       {
  //         where: { id },
  //       }
  //     );
  //     return result;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
//   static async create(course, userId, category) {
//     try {
//       const courseResult = await Courses.create(course);
//       // devuelve es un objeto con la tarea creada {id, title, description, isComplete, creat, uptade}
//       const { id } = courseResult;
//       Categories.create({name: category, course_id: id})
//       usersCourses.create({ userId: userId, courseId: id })
//       return courseResult;
      
//     } catch (error) {
//       throw error;
//     }
//   }
}

module.exports = CoursesServices;

// {
//   title:"Clientes ilimitados",
//   description: 
//     "consigue clientes para tu negocio en poco tiempo",
//   instructor: "Armando Paredes",
//   categories: [
//     "Marketing", 
//     "Ventas", 
//     "Finanzas"],
//   videos:[
//     {
//       title:'Bienvenido',
//       url:'https//:www.google.com'
//     },
//     {
//       title: "Crea tu cuenta",
//       url:"https//:www.google.com"
//     }
//   ],
// }