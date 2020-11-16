import React from 'react';
import TaskDetail from './TaskDetail';

const TaskList = ({ tasks }) => {
  const allTasks = tasks.map(task => {
    return <TaskDetail key={task} task={task} />
  })
  return (
    <div>
      <ul>
        { allTasks }
      </ul>
    </div>
  )
}

export default TaskList;