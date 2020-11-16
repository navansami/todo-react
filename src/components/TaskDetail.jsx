import './TaskDetail.css';
import React from 'react';

const TaskDetail = ({ task }) => {
  return (
    <div className="item" >
      <input type="checkbox" /> { task }
    </div>
  )
}

export default TaskDetail;