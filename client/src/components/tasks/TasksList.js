import React, { Fragment } from 'react'
import Task from './Task'

const TasksList = () => {

    const tasksProject = [
        {name: 'Choose platform', state: true},
        {name: 'Choose colors', state: false},
        {name: 'Choose payment platform', state: false},
        {name: 'Choose Hosting service', state: true},
    ];


    return ( 
        <Fragment>
        <h2>Project: Virtual Store </h2>

        <ul className="listado-tareas">
            {tasksProject.length === 0 
            ? (<li className='task'><p>No tasks so far.</p></li>)
            : tasksProject.map(task =>(
                <Task 
                task = {task}
                />
            ))
        }
        </ul>

        <button type='button'
        className='btn btn-eliminar'>
            Delete Project &times;
        </button>
        </Fragment>
     );
}
 
export default TasksList;