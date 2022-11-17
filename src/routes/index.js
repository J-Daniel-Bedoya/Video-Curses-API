const express = require("express");
const router = express.Router();
const fs = require("fs");

const PATH__ROUTES = __dirname;

const removeExtension = (fileName) => {
  return fileName.split(".").shift()
}

fs.readdirSync(PATH__ROUTES).filter((file) => {
  const name = removeExtension(file);
  // console.log(name)
  if (name !== "index"){
    router.use(`/${name}`, require(`./${file}`))
  }
})

module.exports = router