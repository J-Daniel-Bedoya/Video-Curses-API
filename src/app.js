require("dotenv").config();
const express = require('express');
const db = require('./utils/database');
const initModels = require("./models/initModels");
const handleError = require("./middlewares/error");
const usersRoutes = require("./routes/users.routes")

const app = express();
app.use(express.json());
  
db.authenticate()
  .then(() => console.log('Autenticación exitosa'))
  .catch((err) => console.log(err))
  
db.sync()
  .then(() => console.log('Conexión exitosa'))
  .catch((err) => console.log(err))
  
initModels();

app.get('/', (req, res) => {
  res.status(200).json('Respuesta exitosa')
});
  
app.use("/api/v1", usersRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el PORT ${PORT}`);
});

app.use(handleError);