
const express = require('express');
const db = require('./utils/database');
const initModels = require("./models/initModels");
const handleError = require("./middlewares/error");

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
    "status": 'Respuesta exitosa',
    "url_base": "https://video-curses-api-production.up.railway.app/api/v1",
    "todas_las_rutas": [
      { "get_para_ver_todos_los_usuarios": "/users" },
      { "get_para_ver_los_datos_de_un_usuario_en_detalle": "users/:id" },
      { "get_para_ver_los_cursos_del_usuario": "/users/:id/courses" },
      {
        "post_para_crear_un_nuevo_usuario": {
          "ruta": "/users",
          "ejemplo": {
            "name": "Introdusca su nombre o un apodo",
            "email": "Colaca el email que prefiera",
            "password": "Introdusca la contraseña que quiera"
          }
        }
      },
      {
        "put_para_actualizar_la_información_del_ususario_solo_name_y_password": {
          "ruta": "/users/:id",
          "ejemplo": {
            "name": "Introdusca un nuevo nombre o un apodo",
            "password": "Introdusca la nueva contraseña que quiera"
          }
        }
      },
      {
        "post_para_que_un_usuario_se_agrege_un_curso": {
          "ruta": "/users/:id",
          "ejemplo": {
            "courseId": "Introdusca el id del curso que desea"
          }
        }
      }
    ]
  })
});
  
app.use("/api/v1", require("./routes"))


app.use(handleError);

module.exports = app;