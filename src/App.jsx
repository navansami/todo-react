import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AddTask from './components/AddTask';

const App = () => {

  const [task, setTask] = useState('');

  const onTaskAdded = (text) => {
    setTask(text);
  }

  return (
    <React.Fragment>
      <Navbar />
      <AddTask onTaskAdded={onTaskAdded} />
    </React.Fragment>
  );
}

export default App;