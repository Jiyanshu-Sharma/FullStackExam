import React, { useState } from 'react';
import '../Styles/Todo.css'

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
    if (newTask.trim() === '') {
      return;
    }

    if (editingTask !== null) {
      
      const updatedTasks = [...tasks];
      updatedTasks[editingTask] = newTask;
      setTasks(updatedTasks);
      setEditingTask(null);
    } else {
      
      setTasks([...tasks, newTask]);
    }
    setNewTask('');
  };

  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditingTask(index);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className='Todolist'>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>{editingTask !== null ? 'Update Task' : 'Add Task'}</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
