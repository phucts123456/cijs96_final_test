import React from 'react'
import { useState } from 'react'
import './AddForm.css'
function Search({addTask}) {
    const  [task, setTask] = useState('');

  return (
    <div className='search_container'>
        <input className='serach_input' placeholder='add tasks' value={task} onChange={(e) =>{setTask(e.target.value)}} />
        <button className='search_add_btn' onClick={() => {addTask(task)}}>Add</button>
    </div>
  )
}

export default Search