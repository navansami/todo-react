import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import CompletedTaskList from './components/CompletedTasksList';

const App = () => {

  const [tasks, setTasks] = useState([]);
  const [taskCompleted, setTaskCompleted] = useState([]);

  const onTaskAdded = (text) => {
      setTasks([...tasks, text]);
  }

  const onTaskCompleted = (taskDetail) => {
    setTaskCompleted([...taskCompleted, taskDetail]);
    setTasks(tasks.filter(task => task !== taskDetail ))
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="bodyApp">
        <AddTask onTaskAdded={onTaskAdded} />
        <TaskList tasks={tasks} onTaskCompleted={onTaskCompleted} />
        <CompletedTaskList taskCompleted={taskCompleted} />
      </div>
    </React.Fragment>
  );
}

export default App;