import React, { useState } from 'react';

const CompletedTaskDetail = ({ task }) => {

  
  const onCheckedChange = () => {
    console.log()
  }

  return (
    <div>
      <input type="checkbox" onChange={onCheckedChange} /> { task }
    </div>
  );
}

export default CompletedTaskDetail;