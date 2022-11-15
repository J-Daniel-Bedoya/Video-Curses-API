const { Sequelize } = require('sequelize');
  
const db = new Sequelize  ({
  database: 'courses_web',
  username: 'postgres',
  host: 'localhost',
  password: 'root',
  dialect: 'postgres',
});
  
module.exports = db;