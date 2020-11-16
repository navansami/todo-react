import React from 'react';

const TaskDetail = ({ task }) => {
  return (
    <div>
      <input type="checkbox" /> { task }
    </div>
  )
}

export default TaskDetail;