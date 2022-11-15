const Users = require("./users.models");
const UsersCourses = require("./usersCourses.models");
const Courses = require("./courses.model");
const Categories = require("./categories.models");
const Videos = require("./videos.models");


const initModels = () => {

  Videos.belongsTo(Courses, { as: "material", foreignKey: "courses_id" });
  Courses.hasMany(Videos, { as: "contenido", foreignKey: "courses_id" });

  Courses.belongsTo(Categories, { as: "Category", foreignKey: "categories_id" });
  Categories.hasMany(Courses, { as: "Categories", foreignKey: "categories_id" });

  UsersCourses.belongsTo(Users, { as: "relacionUserOne", foreignKey: "users_id" });
  Users.hasMany(UsersCourses, { as: "realcionUserTwo", foreignKey: "users_id" });

  UsersCourses.belongsTo(Courses, { as: "relacionCourseOne", foreignKey: "courses_id" });
  Courses.hasMany(UsersCourses, { as: "relacionCourseTwo", foreignKey: "courses_id" });

};

module.exports = initModels;