const Users = require("./users.models");
const UsersCourses = require("./usersCourses.models");
const Courses = require("./courses.model");
const Categories = require("./categories.models");
const Videos = require("./videos.models");


const initModels = () => {
  Users;
  UsersCourses;
  Courses;
  Categories;
  Videos;
};

module.exports = initModels;