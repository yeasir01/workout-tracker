const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api.js");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(routes);

app.listen(PORT, function () {
    console.log("==> Listening on port %s. Visit http://localhost:%s in your browser", PORT, PORT)
});