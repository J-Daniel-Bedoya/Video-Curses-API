const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");


class CoursesServices {
  static async getAll() {
    try {
      const result = await Courses.findAll({
        attributes: ["id", "title"],
      });
      console.log(result)
      return result;
    } catch (error) {
      throw error;
    }
  }
  // static async getByUserId(userId) {
  //   try {
  //     const result = await Courses.findAll({
  //       where: { userId },
  //       attributes: ["id", "title", "description", "isComplete"],
  //       include: {
  //         model: a,
  //         as: "categories",
  //         attributes: ["categoryId"],
  //         include: {
  //           model: Categories,
  //           as: "category",
  //           attributes: ["name"],
  //         },
  //       },
  //     });
  //     return result;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // static async create(task, categories) {
  //   try {
  //     const taskResult = await Tasks.create(task);
  //     // devuelve es un objeto con la tarea creada {id, title, description, isComplete, creat, uptade}
  //     const { id } = taskResult;
  //     categories.forEach(
  //       async (category) =>
  //         await TaskCategories.create({ categoryId: category, taskId: id })
  //     );
  //     return taskResult;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

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
}

module.exports = CoursesServices;