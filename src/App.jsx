import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AddTask from './AddTask';
import TaskList from './components/TaskList';

const App = () => {

  const [tasks, setTasks] = useState([]);

  const onTaskAdded = (text) => {
      setTasks([...tasks, text]);
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="bodyApp">
        <AddTask onTaskAdded={onTaskAdded} />
        <TaskList tasks={tasks} />
      </div>
    </React.Fragment>
  );
}

export default App;