import React from 'react';
import TaskDetail from './TaskDetail';

const TaskList = ({ tasks, onTaskCompleted }) => {
  const allTasks = tasks.map(task => {
    return <TaskDetail key={task} task={task} onTaskCompleted={onTaskCompleted} />
  })
  return (
    <div style={{ marginTop: '10px' }} >
        { allTasks }
    </div>
  )
}

export default TaskList;