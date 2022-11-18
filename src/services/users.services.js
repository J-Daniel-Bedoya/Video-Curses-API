const UsersCourses = require("../models/usersCourses.models");
const Courses = require("../models/courses.models");
const Users = require("../models/users.models");

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll({
        attributes: ["id", "name", "email"],
      });
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


