const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users = require('./users.models');
const Courses = require('./courses.models');

const UsersCourses = db.define('usersCourses', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "users_id",
    references: {
      key: "id",
      model: Users,
    },
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "courses_id",
    references: {
      key: "id",
      model: Courses,
    },
  },
},
{
  timestamps: false,
}
);

module.exports = UsersCourses;