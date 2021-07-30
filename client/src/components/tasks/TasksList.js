import React, { Fragment, useContext } from 'react'
import Task from './Task'
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const TasksList = () => {
    //Some notes

    //Get projects form initial state
    const projectsContext = useContext(projectContext);
    const { project, deleteProject } = projectsContext;

    //Get tasks project
    const tasksContext = useContext(taskContext);
    const { projectasks } = tasksContext;

    //If project is not selected
    if(!project) return <h2>Select a project</h2>;


    //Array destructuring to fetch actual project
    const [actualProject] = project;

    

    //Delete a project
    const deleteOnClick = () => {
        deleteProject(actualProject.id)
    }


    return ( 
        <Fragment>
        <h2>Project: {actualProject.name} </h2>

        <ul className="listado-tareas">
            {projectasks.length === 0 
            ? (<li className='task'><p>No tasks so far.</p></li>)
            : projectasks.map(task =>(
                <Task 
                task = {task}
                />
            ))
        }
        </ul>

        <button type='button'
        className='btn btn-eliminar'
        onClick={ deleteOnClick }>
            Delete Project &times;
        </button>
        </Fragment>
     );
}
 
export default TasksList;