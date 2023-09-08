const connection = require('./connection');

// c de crud - create
const createTask = async (task) => {
  const { title } = task;

  const [createdTask] = await connection.execute(
    'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)',
    [title, 'pendente', new Date(Date.now()).toUTCString()]
  );

  return { insertId: createdTask.insertId };
};

// r do CRUD
const findAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

// u de crud - update
const updateTask = async (id, task) => {
  const { title, status } = task;

  const [updatedTask] = await connection.execute(
    'UPDATE tasks SET title = ?, status = ? WHERE id = ?',
    [title, status, id]
  );

  return updatedTask;
};

// d de crud - delete
const deleteTask = async (id) => {
  const [removedTask] = await connection.execute(
    'DELETE FROM tasks WHERE id = ?',
    [id]
  );

  return removedTask;
};

module.exports = {
  createTask,
  findAll,
  updateTask,
  deleteTask,
};
