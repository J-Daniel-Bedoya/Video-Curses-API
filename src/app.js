
const express = require('express');
const db = require('./utils/database');
const initModels = require("./models/initModels");
const handleError = require("./middlewares/error");
const docsUsers = require("./docs/users.docs.json");
const docsCourses = require("./docs/courses.docs.json");

const app = express();
app.use(express.json());
  
db.authenticate()
  .then(() => console.log('Autenticación exitosa'))
  .catch((err) => console.log(err))
  
db.sync({ alter: true })
  .then(() => console.log('Conexión exitosa'))
  .catch((err) => console.log(err))
  
initModels();

app.get('/', (req, res) => {
  res.status(200).json(docsUsers, docsCourses)
});
  
app.use("/api/v1", require("./routes"))


app.use(handleError);

module.exports = app;