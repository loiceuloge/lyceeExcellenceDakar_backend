const Student = require("./students.schema");

module.exports.insertOne = async (userInput) => {
  const student = { ...userInput, currentClasse: "null" };
  const result = await Student.create(student);
  return result;
};

module.exports.findById = async (id) => {
  const result = await Student.findById(id);
  return result;
};

module.exports.deleteOne = async (id) => {
  await Student.deleteOne({ id });
};

module.exports.updateOne = async (id, name) => {
  await Student.updateOne({ _id: id }, { name });
};

module.exports.list = async () => {
  const result = await Student.find();
  return result;
};

module.exports.attachClasse = async (studentID, classe) => {
  await Student.updateOne({ _id: studentID }, { currentClasse: classe });
};

module.exports.detachClasse = async (studentID) => {
  await Student.updateOne({ _id: studentID }, { currentClasse: "null" });
};
