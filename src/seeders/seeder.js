const db = require("../utils/database");
const initModels = require("../models/initModels");
const Users = require("../models/users.models");
const Courses = require("../models/courses.models");
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
const categories = [
  { name: "básico" }, // 1 . 1, 4, 5
  { name: "intermedio" }, // 2
  { name: "premium" }, // 3
];

const courses = [
  { title: "Exel", description: "Curso intensivo", instructor: "Rosaura", price: 17, categorieId: 1 },
  { title: "React", description: "Algo profecional", instructor: "Alejandra", price: 157, categorieId: 3 },
  { title: "ES6", description: "Aprofundidad", instructor: "Rafael", price: 15, categorieId: 2 },
];

const videos = [
  {
    title: "Enseñando exel nv1",
    description: "primera clase",
    instructor: "Rosaura",
    url: "el",
    duration: 130000,
    courseId: 1,
  },
  {
    title: "Enseñando ES6 nv1",
    description: "primera clase",
    instructor: "Rafael",
    url: "et",
    duration: 240000,
    courseId: 3,
  },
  {
    title: "Enseñando React nv1",
    description: "primera clase",
    instructor: "Alejandra",
    url: "ev",
    duration: 160000,
    courseId: 2,
  },
  {
    title: "Enseñando React nv2",
    description: "primera clase",
    instructor: "Alejandra",
    url: "tv",
    duration: 180000,
    courseId: 2,
  },
];



const usco = [
  { userId: 1, courseId: 2 },
  { userId: 1, courseId: 3 },
  { userId: 2, courseId: 1 },
  { userId: 2, courseId: 2 },
  { userId: 2, courseId: 3 },
  { userId: 3, courseId: 1 },
];

db.sync({ force: true }).then(async () => {
  console.log("Iniciando plantación");

  users.forEach((user) => Users.create(user));

  setTimeout(() => {
    categories.forEach((category) => Categories.create(category));
  }, 100);
  setTimeout(() => {
    courses.forEach((cat) => Courses.create(cat));
  }, 200);
  setTimeout(() => {
    videos.forEach((vid) => Videos.create(vid));
  }, 300);
  setTimeout(() => {
    usco.forEach((us) => UsersCourses.create(us));
  }, 400);
});

