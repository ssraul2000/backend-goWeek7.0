const Post = require("../models/Post");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
class PostController {
  async index(req, res) {
    const posts = await Post.find().sort("-createdAt");
    return res.json(posts);
  }

  async store(req, res) {
    const { author, place, description, hashtags } = req.body;
    const [name] = req.file.key.split(".");
    const fileName = `${name}.jpg`;

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(req.file.destination, "resized", fileName));
    fs.unlinkSync(req.file.path);

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image: fileName
    });
    return res.json(post);
  }
}

module.exports = new PostController();
