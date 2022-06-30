const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const Files = require("edacy-files-walk");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

console.log(DB);

async function connectDB() {
  await mongoose.connect(DB);
  console.log("DB connection succesful");
}

(async () => {
  await connectDB();
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.options("*", cors());

  app.use(express.static("./front-end"));

  var routes = Files.walk(__dirname + "/api/modules");

  // IMPORT PUBLIC ROUTES
  for (var i = 0; i < routes.length; i++)
    if (routes[i].indexOf("routes") !== -1) require(routes[i])(app);

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(` App running on port ${port}...`);
  });
})();
