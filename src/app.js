
const express = require('express');
const db = require('./utils/database');
const initModels = require("./models/initModels");
const handleError = require("./middlewares/error");
const { 
  docsUsers, 
  docsCourses, 
  docsVideos, 
  docsCategories 
} = require("./docs");

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
  res.status(200).json({
    "status": "Respuesta exitosa",
    "url_base": "https://video-curses-api-production.up.railway.app/api/v1",
    docsUsers, 
    docsCourses, 
    docsVideos, 
    docsCategories})
});
  
app.use("/api/v1", require("./routes"))


app.use(handleError);

module.exports = app;