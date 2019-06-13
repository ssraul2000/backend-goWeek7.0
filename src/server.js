const app = require("./app");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://goweek:goweek@cluster0-cznwt.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.listen(process.env.PORT || 3333);
