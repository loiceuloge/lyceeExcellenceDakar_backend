const StudentService = require("./students.services");

module.exports.insertOne = async (req, res) => {
  const data = req.body;
  const student = await StudentService.insertOne(data);
  res.json(student);
};

module.exports.findOne = async (req, res) => {
  const id = req.params.id;
  const student = await StudentService.findById(id);
  res.json(student);
};

module.exports.deletOne = async (req, res) => {
  const id = req.params.id;
  await StudentService.deleteOne(id);
  res.json({
    success: true,
  });
};

module.exports.updateOne = async (req, res) => {
  const id = req.params.id;
  const username = req.body.name;

  await StudentService.updateOne(id, username);
  res.json({
    success: true,
  });
};

module.exports.findAll = async (req, res) => {
  res.json(await StudentService.list());
};

module.exports.attachClasse = async (req, res) => {
  const id = req.params.id;
  const classe = req.body.currentClasse;
  try {
    await StudentService.attachClasse(id, classe);
    res.json({
      success: true,
    });
  } catch (err) {
    console.error(err);
  }
};
module.exports.detachClasse = async (req, res) => {
  const id = req.params.id;
  const classe = req.body.currentClasse;
  try {
    await StudentService.detachClasse(id);
    res.json({
      success: true,
    });
  } catch (err) {
    console.error(err);
  }
};
