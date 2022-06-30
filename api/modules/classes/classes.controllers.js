const ClasseService = require("./classes.services");

module.exports.insertOne = async (req, res) => {
  const data = req.body.name;
  const classe = await ClasseService.insertOne(data);
  res.json(classe);
};

module.exports.findOne = async (req, res) => {
  const id = req.params.id;
  const classe = await ClasseService.findById(id);
  res.json(classe);
};

module.exports.deletOne = async (req, res) => {
  const id = req.params.id;
  await ClasseService.deleteOne(id);
  res.json({
    success: true,
  });
};

module.exports.updateOne = async (req, res) => {
  const id = req.params.id;
  const username = req.body.name;

  await ClasseService.updateOne(id, username);
  res.json({
    success: true,
  });
};

module.exports.findAll = async (req, res) => {
  res.json(await ClasseService.list());
};
