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
    references: {
      key: "id",
      model: Users,
    },
    field: "users_id",
    allowNull: false,
  },
  coursesId: {
    type: DataTypes.INTEGER,
    references: {
      key: "id",
      model: Courses,
    },
    field: "courses_id",
    allowNull: false,
  },
},
{
  timestamps: false,
}
);

module.exports = UsersCourses;