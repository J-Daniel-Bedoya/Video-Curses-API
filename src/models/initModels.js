const Users = require("./users.models");
const UsersCourses = require("./usersCourses.models");
const Courses = require("./courses.models");
const Categories = require("./categories.models");
const Videos = require("./videos.models");


const initModels = () => {

  Videos.belongsTo(Courses, { foreignKey: "courses_id" });
  Courses.hasMany(Videos, { foreignKey: "courses_id" });

  Courses.belongsTo(Categories, { foreignKey: "categories_id" });
  Categories.hasMany(Courses, { foreignKey: "categories_id" });

  Users.belongsToMany(Courses, { through: "usersCourses" });
  Courses.belongsToMany(Users, { through: "usersCourses" });

};

module.exports = initModels;