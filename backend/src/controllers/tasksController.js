const tasksModel = require('../models/tasksModel');

// c de crud - create
const createTask = async (req, res) => {
  const createdTask = await tasksModel.createTask(req.body);
  return res.status(201).json(createdTask);
};

// r do CRUD - read
const findAll = async (req, res) => {
  const tasks = await tasksModel.findAll();
  return res.status(200).json(tasks);
};

// u de crud - update
const updateTask = async (req, res) => {
  const { id } = req.params;
  const task = req.body;
  await tasksModel.updateTask(id, task);
  return res.status(204).json({ message: 'Tarefa atualizada com sucesso' });
};

// d de crud - delete
const deleteTask = async (req, res) => {
  const { id } = req.params;
  await tasksModel.deleteTask(id);
  return res.status(204).json({ message: 'Tarefa removida com sucesso' });
};

module.exports = {
  createTask,
  findAll,
  updateTask,
  deleteTask,
};
