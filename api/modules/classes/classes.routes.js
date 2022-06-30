module.exports = (app) => {
  const Ctrl = require("./classes.controllers");

  app.route("/classes").get(Ctrl.findAll).post(Ctrl.insertOne);

  app
    .route("/classes/:id")
    .get(Ctrl.findOne)
    .delete(Ctrl.deletOne)
    .patch(Ctrl.updateOne);
};
