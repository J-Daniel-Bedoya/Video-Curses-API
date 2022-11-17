// importar el modelo donde estaremos haciendo las consultas
const Videos = require("../models/videos.models");
const Categories = require("../models/categories.models");
const UsersCourses = require("../models/usersCourses.models");
const Courses = require("../models/courses.models");
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
        attributes: ["id", "name"],
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
          attributes: ["id", "title" ],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async postUserJoinCourses(id, courseId) {
    try {
      const result = await UsersCourses.create({ 
        userId: id, 
        courseId: courseId 
      })
      return result;
    } catch (error) {
      throw error;
    }
  }
  

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
      const result = await Users.update({name: name, password: password}, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;


