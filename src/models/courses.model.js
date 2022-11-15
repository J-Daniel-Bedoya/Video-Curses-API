const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Categories = require('./categories.models');


const Courses = db.define('courses', {
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
    allowNull: false,
  },
  instructor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categories: {
    type: DataTypes.INTEGER,
    references: {
      key: "id",
      model: Categories,
    },
    field: "categories",
    allowNull: false,
  }

},
{
  timestamps: false
});

module.exports = Courses;