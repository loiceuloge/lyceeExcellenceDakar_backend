const Classe = require("./classes.schema");

module.exports.insertOne = async (classesName) => {
  const classe = { name: classesName };
  const result = await Classe.create(classe);
  return result;
};

module.exports.findById = async (id) => {
  const result = await Classe.findById(id);
  return result;
};

module.exports.deleteOne = async (id) => {
  await Classe.deleteOne({ id });
};

module.exports.updateOne = async (id, name) => {
  await Classe.updateOne({ _id: id }, { name });
};

module.exports.list = async () => {
  const result = await Classe.find();
  return result;
};

module.exports.attachClasse = async (classeID, classe) => {
  await Classe.updateOne({ _id: classeID }, { currentClasse: classe });
};

module.exports.detachClasse = async (classeID) => {
  await Classe.updateOne({ _id: classeID }, { currentClasse: "null" });
};
