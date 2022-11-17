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
      const result = await Courses.findOne({
        where: { id },
        attributes: { 
          exclude: ["categorieId", "categories_id", "createdAt", "updatedAt"]
        },
        include: [
          {
            model: Categories,
            attributes: ["name"],
          },
          {
            model: Videos,
            attributes: ["title", "url"]
          },
          
        ]
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
    } catch (error) {
      throw error;
    }
  }
  
  static async updateStatus(id, description) {
    try{
      const result = await Courses.update({description: description}, {
        where:{id}
      });
      return result;
    }catch (error){
      throw(error);
    }
  }

  static async videoPost(video) {
    try {
      const result = await Videos.create(video);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async videoDelete(id) {
    try {
      const result = await Videos.destroy({
        where: { id }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  static async categoriesPost(categories) {
    try {
      const result = await Categories.create(categories);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async categoriesDelete(id) {
    try {
      const result = await Categories.destroy({
        where: { id }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
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