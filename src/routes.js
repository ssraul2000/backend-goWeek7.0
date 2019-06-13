const routes = require("express").Router();
const multer = require("multer");
const configUpload = require("./config/upload");
const upload = multer(configUpload);
//Controllers
const PostController = require("./controllers/PostController");
//Rotas
routes.post(
  "/posts",
  multer(configUpload).single("image"),
  PostController.store
);

module.exports = routes;
