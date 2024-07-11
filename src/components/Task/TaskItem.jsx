import React from 'react'
import './TaskItem.css'
function TaskItem({id, name, status, isCompletedTab, setTaskStatus, deleteSinglelCompleteTask}) {
  const [checked, setChecked] = React.useState(status == 1 ? true : false);
  const handleCheckChange = () => {
    if(checked == false)
    {
        setChecked(!checked);
        setTaskStatus({ id:id ,name:name,status:1});
    }
  }
  return (
    <div className='task_item_container'>
      <input className='task_item_check_box' type="checkbox" checked={checked} onChange={handleCheckChange} />
      <p className={`task_item_name  ${checked ? 'completed' : ''}`}>{name}</p>
      {isCompletedTab == true ? <button onClick={() => {deleteSinglelCompleteTask(id)}}><img className='task_item_remove_item_icon' src='/img/icons8-trash.svg'/></button> : ""}
    </div>
  )
}

export default TaskItem
