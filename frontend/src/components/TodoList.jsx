import React, { useEffect, useState } from 'react';
import '../CSS/TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const URL = 'http://localhost:3001/tasks';

  // useEffect que roda apenas uma vez, quando o componente é montado e  renderizado pela primeira vez, para buscar as tarefas do backend
  useEffect(() => {
    fetchTasks();
  }, []);

  // r do crud
  const fetchTasks = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setTasks(data);
  };

  // c do crud
  const createTask = async (event) => {
    event.preventDefault();

    const task = { title: newTask };

    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    fetchTasks();
    setNewTask('');
  };

  // u do crud
  const updateTask = async (task) => {
    const { id, title, created_at, status } = task;

    await fetch(`${URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, created_at, status }),
    });

    fetchTasks();
  };

  // d do crud
  const deleteTask = async (id) => {
    await fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });

    fetchTasks();
  };

  const formatDate = (dateUTC) => {
    const options = { dateStyle: 'long', timeStyle: 'short' };
    const date = new Date(dateUTC).toLocaleString('pt-br', options);
    return date;
  };

  const createRow = (task) => {
    const { id, title, created_at, status } = task;

    const handleStatusChange = (event) => {
      const newStatus = event.target.value;
      updateTask({ ...task, status: newStatus });
    };


    return (
      <tr key={id}>
        <td>{title}</td>
        <td>{formatDate(created_at)}</td>
        <td>
          <select value={status} onChange={handleStatusChange}>
            <option value="pendente">Pendente</option>
            <option value="em andamento">Em andamento</option>
            <option value="concluida">Concluída</option>
          </select>
        </td>
        <td>
          <div className='btn-act-container'>
            <button
              className="btn-action"
              onClick={() => {
                const newTitle = prompt('Digite a nova tarefa');
                if (newTitle) {
                  updateTask({ ...task, title: newTitle });
                }
                
              }}
            >
            Editar
            </button>
            <button
              className="btn-action"
              onClick={() => deleteTask(id)}
            >
            Deletar
            </button>
          </div>
        </td>
      </tr>
    );
  };

  return (

    <main>
      
      <form className="add-form" onSubmit={createTask}>
        <input
          type="text"
          placeholder="Adicionar tarefa"
          className="input-task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" className="btn-form">
            +
        </button>
      </form>
      
      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Criada em</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => createRow(task)).reverse()}
        </tbody>
      </table>
      
    </main>

  );
};

export default TodoList;
