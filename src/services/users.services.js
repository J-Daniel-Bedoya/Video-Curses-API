// importar el modelo donde estaremos haciendo las consultas
const Videos = require("../models/videos.models");
const Categories = require("../models/categories.models");
const UsersCourses = require("../models/usersCourses.models");
const Courses = require("../models/courses.model");
const Users = require("../models/users.models");

class UserServices {
  static async getAll() {
    // select id, username, email from users;
    try {
      const result = await Users.findAll({
        attributes: ["id", "name", "email"],
      }); // select * from users;
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: ["id", "name", "email"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUserJoinCourses(id) {
    try {
      const result = await Users.findOne({
        where: { id }, 
        attributes: ["id", "name"], 
        include: {
          model: Courses,
          attributes: ["id", "title"],
          // include: {
          //   model: UsersCourses,
          //   att
          // }
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  // static async getUserJoinCourses2(id) {
  //   try {
  //     const result = await Users.findOne({
  //       where: { id },
  //       attributes: ["username"],
  //       include: {
  //         model: Courses,
  //         as: "todos",
  //         attributes: ["title", "description", "is_complete"],
  //         include: {
  //           model: TaskCategories,
  //           as: "categories",
  //           attributes: ["category_id"],
  //           include: {
  //             model: Categories,
  //             as: "category",
  //             attributes: ["name"],
  //           },
  //         },
  //       },
  //     });
  //     return result;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  static async add(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(updateData, id) {
    try {
      const { name, password } = updateData;
      const result = await Users.update(updateData, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;

const esperar = async (random) => {
  const l = await random * 2;
  const f = l * 6;
}