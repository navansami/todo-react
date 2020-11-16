import './ItemStyling.css';
import React from 'react';
import CompletedTaskDetail from './CompletedTaskDetail';

const CompletedTaskList = ({ taskCompleted }) => {
  const tasksDone = taskCompleted.map(task => {
    return <CompletedTaskDetail key={task} task={task} /> 
  });
  return (
    <div className="item is-completed" >
      { tasksDone }
    </div>
  );
}

export default CompletedTaskList;