import React, { useState } from 'react';

const AddTask = (props) => {
  const [ text, setText ] = useState('');

  const onFormSubmitted = (e) => {
    e.preventDefault();
    props.onTaskAdded(text);
  }

  return (
    <div>
      <form onSubmit={(e) => onFormSubmitted(e)} >
        <input 
          type="text"
          value={ text }
          onChange={ (e) => setText(e.target.value) }
        />
      </form>
    </div>
  )
}

export default AddTask;