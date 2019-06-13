const Post = require("../models/Post");
class PostController {
  async index(req, res) {
    const posts = await Post.find();
    return res.json(posts);
  }

  async store(req, res) {
    const { author, place, description, hashtags } = req.body;
    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image: req.file.key
    });
    return res.json(post);
  }
}

module.exports = new PostController();
