const express = require("express");
const path = require("path");
const cors = require("cors");
class App {
  constructor() {
    this.express = express();
    this.server = require("http").Server(this.express);
    this.io = require("socket.io")(this.server);
    this.middleware();
    this.routes();
  }

  middleware() {
    this.express.use(cors());
    this.express.use((req, res, next) => {
      req.io = this.io;
      return next();
    });
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
