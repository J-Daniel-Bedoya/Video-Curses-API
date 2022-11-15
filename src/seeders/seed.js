const db = require("../utils/database");
const initModels = require("../models/initModels");
const Users = require("../models/users.models");
const Courses = require("../models/courses.model");
const Videos = require("../models/videos.models");
const Categories = require("../models/categories.models");
const UsersCourses = require("../models/usersCourses.models");

// arreglos con la información que se va a plantar
initModels();

const users = [
  { name: "Ian Rosas", email: "ian@gmail.com", password: "2334" },
  { name: "Alvis Echeverria", email: "alvis@gmail.com", password: "3634" },
  { name: "Carlos Tineo", email: "carlos@gmail.com", password: "9034" },
];

const courses = [
  { title: "Exel", description: "Curso intensivo", instructor: "Rosaura", price: 17, categoriesId: 1 },
  { title: "React", description: "Algo profecional", instructor: "Alejandra", price: 157, categoriesId: 3 },
  { title: "ES6", description: "Aprofundidad", instructor: "Rafael", price: 15, categoriesId: 2 },
];

const videos = [
  {
    title: "Enseñando exel nv1",
    description: "primera clase",
    instructor: "Rosaura",
    url: "el",
    duration: 130000,
    coursesId: 1,
  },
  {
    title: "Enseñando ES6 nv1",
    description: "primera clase",
    instructor: "Rafael",
    url: "et",
    duration: 240000,
    coursesId: 3,
  },
  {
    title: "Enseñando React nv1",
    description: "primera clase",
    instructor: "Alejandra",
    url: "ev",
    duration: 160000,
    coursesId: 2,
  },
];

const categories = [
  { name: "básico" }, // 1 . 1, 4, 5
  { name: "intermedio" }, // 2
  { name: "premium" }, // 3
];

const usco = [
  { usersId: 1, coursesId: 2 },
  { usersId: 1, coursesId: 3 },
  { usersId: 2, coursesId: 1 },
  { usersId: 2, coursesId: 2 },
  { usersId: 2, coursesId: 3 },
  { usersId: 3, coursesId: 1 },
];

db.sync({ force: true }).then(async () => {
  console.log("Iniciando plantación");

  users.forEach((user) => Users.create(user));

  setTimeout(() => {
    courses.forEach((cat) => Courses.create(cat));
  }, 100);
  setTimeout(() => {
    categories.forEach((category) => Categories.create(category));
  }, 200);
  setTimeout(() => {
    videos.forEach((vid) => Videos.create(vid));
  }, 300);
  setTimeout(() => {
    usco.forEach((us) => UsersCourses.create(us));
  }, 400);
});

