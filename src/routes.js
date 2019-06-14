const routes = require("express").Router();
const multer = require("multer");
const configUpload = require("./config/upload");
//Controllers
const PostController = require("./controllers/PostController");
const LikeController = require("./controllers/LikeController");
//Rotas
routes.post(
  "/posts",
  multer(configUpload).single("image"),
  PostController.store
);
routes.get("/posts", PostController.index);
routes.post("/posts/:id/like", LikeController.store);

module.exports = routes;
