import React from 'react';
import { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const toggleComplete = () => {
    updateTask(task.id, { ...task, completed: !task.completed });
  };

  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    await updateTask(editedTask.id, editedTask);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditedTask(task);
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  return (
    <>
      {editing ? (
        <li key={task.id}>
          <input type="text" name="title" value={editedTask.title} onChange={handleChange} />
          {/* <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span> */}
          <button  onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
          </li>

       

      ):(
        <li key={task.id}>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
    
      <button onClick={handleEdit}>Edit</button>
      <button onClick={toggleComplete}>
        {task.completed ? 'Incomplete' : 'Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      </li>)}
    </>
  );
};

export default TaskItem;
