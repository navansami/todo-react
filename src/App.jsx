import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {

  const [tasks, setTasks] = useState(['clean my room', 'complete this todo list']);

  const onTaskAdded = (text) => {
      setTasks([...tasks, text]);
  }

  return (
    <React.Fragment>
      <Navbar />
      <AddTask onTaskAdded={onTaskAdded} />
      <TaskList />
    </React.Fragment>
  );
}

export default App;