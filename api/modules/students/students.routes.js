module.exports = (app) => {
  const Ctrl = require("./students.controllers");

  app.route("/students").get(Ctrl.findAll).post(Ctrl.insertOne);

  app
    .route("/students/:id")
    .get(Ctrl.findOne)
    .delete(Ctrl.deletOne)
    .patch(Ctrl.updateOne);

  app.route("/students/join/:id").post(Ctrl.attachClasse);
  app.route("/students/detach/:id").get(Ctrl.detachClasse);
};
