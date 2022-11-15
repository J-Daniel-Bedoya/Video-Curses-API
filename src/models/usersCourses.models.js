const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users = require('./users.models');
const Courses = require('./courses.model');


const UsersCourses = db.define('usersCourses', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  usersId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      key: "id",
      model: Users,
    },
    field: "users_id",
  },
  coursesId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      key: "id",
      model: Courses,
    },
    field: "courses_id",
  },
},
{
  timestamps: false,
}
);

module.exports = UsersCourses;