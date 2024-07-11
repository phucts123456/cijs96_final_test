import React from 'react'
import { useState } from 'react'
import './CompleteTab.css'
import TaskItem from '../Task/TaskItem'
function CompletedTab() {
    const taskListFromLocalStorage = localStorage.getItem("tasks");
    const [taskList, setTaskList] = useState(taskListFromLocalStorage != null ? JSON.parse(taskListFromLocalStorage) : []);

      const deleteSinglelCompleteTask = (id) => {
        const tempTaskList = taskList.filter((item) => item.id != id);
        setTaskList(tempTaskList);
        localStorage.setItem("tasks", JSON.stringify(tempTaskList))
      }
   
      const deleteAllCompleteTask = () => {
        const tempTaskList = taskList.filter((item) => item.status == 0);
        setTaskList(tempTaskList);
        localStorage.setItem("tasks", JSON.stringify(tempTaskList))
      }
      console.log("length" + taskList.filter((item) => item.status == 1).length);
      return (
        <div className='all_tab_container'>
           {
                taskList.map((item) => {
                    if(item.status == 1)
                        return <TaskItem id={item.id} name={item.name} status={item.status} isCompletedTab={true} deleteSinglelCompleteTask={deleteSinglelCompleteTask}/>
                })
           }
           { taskList.filter((item) => item.status == 1).length > 0
           ? <button className='all_tab_delete_all_btn' onClick={deleteAllCompleteTask}><img src='/img/icons8-trash_white.svg'></img><span>Delete all</span></button>   
           : ""}
        </div>)
}

export default CompletedTab
