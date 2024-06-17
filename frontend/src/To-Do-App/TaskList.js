import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import AuthService from '../authService';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './task.css';

const TaskList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.startsWith('/dashboard')) {
      AuthService.logout();
    }
  }, [location]);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:8000/api/tasks/');
    setTasks(response.data);
  };

  const addTask = async (task) => {
    const response = await axios.post('http://localhost:8000/api/tasks/', task);
    setTasks([...tasks, response.data]);
  };

  const updateTask = async (id, updatedTask) => {
    const response = await axios.put(`http://localhost:8000/api/tasks/${id}/`, updatedTask);
    setTasks(tasks.map(task => (task.id === id ? response.data : task)));
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8000/api/tasks/${id}/`);
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleLogout = () => {
    AuthService.logout();
    navigate('/');
  };

  return (
    <div className='home'>
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
        ))}
      </ul>
      <div className="clearfix">
        <button onClick={handleLogout} className='return'>Return to homepage</button>
      </div>
    </div>
  );
};

export default TaskList;
