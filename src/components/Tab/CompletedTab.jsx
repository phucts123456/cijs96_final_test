import React from 'react'
import { useState } from 'react'
import AddForm from '../AddForm/AddForm'
import TaskItem from '../Task/TaskItem'
function CompletedTab() {
    const taskListFromLocalStorage = localStorage.getItem("tasks");
    console.log(taskListFromLocalStorage);
    const [taskList, setTaskList] = useState(taskListFromLocalStorage != null ? JSON.parse(taskListFromLocalStorage) : []);

      const deleteSinglelCompleteTask = (id) => {
        console.log("start delete" +id)
        const tempTaskList = taskList.filter((item) => item.id != id);
        setTaskList(tempTaskList);
        localStorage.setItem("tasks", JSON.stringify(tempTaskList))
      }

      const deleteAllCompleteTask = () => {
        const tempTaskList = taskList.filter((item) => item.status == 0);
        setTaskList(tempTaskList);
        localStorage.setItem("tasks", JSON.stringify(tempTaskList))
      }
      return (
        <div className='all_tab_container'>
           {
                taskList.map((item) => {
                    if(item.status == 1)
                        return <TaskItem id={item.id} name={item.name} status={item.status} isCompletedTab={true} deleteSinglelCompleteTask={deleteSinglelCompleteTask}/>
                })
           }    
        </div>)
}

export default CompletedTab
