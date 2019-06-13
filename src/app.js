const express = require("express");
const path = require("path");
const cors = require("cors");
class App {
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.express.use(cors());
    this.express.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "uploads", "resized"))
    );
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}
module.exports = new App().express;
