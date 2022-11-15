const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Courses = require('./courses.model');


const Videos = db.define('videos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  instructor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  coursesId: {
    type: DataTypes.INTEGER,
    references: {
      key: "id",
      model: Courses,
    },
    field: "courses_id",
    allowNull: false
  }
},
{
  timestamps: false
});

module.exports = Videos;