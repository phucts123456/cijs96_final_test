import React from 'react'
import { useState } from 'react'
import AddForm from '../AddForm/AddForm'
import TaskItem from '../Task/TaskItem'

function ActiveTab() {
    const taskListFromLocalStorage = localStorage.getItem("tasks");
    const [taskList, setTaskList] = useState(taskListFromLocalStorage != null ? JSON.parse(taskListFromLocalStorage) : []);

      const setTaskStatus = (task) => {
        const tempTaskList = taskList.filter((item) => item.id != task.id);
        const newTaskList = [...tempTaskList, task];
        setTaskList(newTaskList);
        localStorage.setItem("tasks", JSON.stringify(newTaskList))
      }

      const addTask = (name) =>{
        let newTask = {
           id: taskList.length +1,
           name: name,
           status: 0
        }
        setTaskList([... taskList, newTask]);
        localStorage.setItem("tasks", JSON.stringify([... taskList, newTask]));
      }
      return (
        <div className='all_tab_container'>
           <AddForm addTask={addTask} />
           {
                taskList.map((item) => {
                    if(item.status == 0)
                        return <TaskItem id={item.id} name={item.name} status={item.status} isCompletedTab={false} setTaskStatus={setTaskStatus}/>
                })
           }    
        </div>)
}

export default ActiveTab