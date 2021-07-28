import React, { Fragment, useContext } from 'react'
import Task from './Task'
import projectContext from '../../context/projects/projectContext';

const TasksList = () => {
    //Some notes

    //Get projects form initial state
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    //If project is not selected
    if(!project) return <h2>Select a project</h2>;


    //Array destructuring to fetch actual project
    const [actualProject] = project;

    const tasksProject = [
        {name: 'Choose platform', state: true},
        {name: 'Choose colors', state: false},
        {name: 'Choose payment platform', state: false},
        {name: 'Choose Hosting service', state: true},
    ];


    return ( 
        <Fragment>
        <h2>Project: {actualProject.name} </h2>

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