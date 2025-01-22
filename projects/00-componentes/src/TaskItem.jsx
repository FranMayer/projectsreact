import React from 'react';

function TaskItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <span onClick={() => toggleTaskCompletion(task.id)}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </li>
  );
}

export default TaskItem;
