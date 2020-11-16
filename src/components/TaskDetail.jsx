import './ItemStyling.css';
import React from 'react';

const TaskDetail = ({ task, onTaskCompleted }) => {

  const onBoxChecked = (taskRef) => {
    onTaskCompleted(taskRef);
  }

  return (
    <div className="item" >
      <input
        type="checkbox" 
        onChange={() => onBoxChecked(task)}   
      /> { task }
    </div>
  )
}

export default TaskDetail;