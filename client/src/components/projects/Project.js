import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Project = ({project}) => {

    //Get the project's state
    const projectsContext = useContext(projectContext);
    const {actualProject} = projectsContext;

    //Function context tasks
    const tasksContext = useContext(taskContext);
    const {getTasks} = tasksContext;

    //Function to add actual project
    const chooseProject = id => {
        actualProject(id); //Pin actual project
        getTasks(id); //Filter taks once project is clicked
    }

    return ( 
        <li>
            <button
            type='button'
            className='btn btn-blank'
            onClick={()=> chooseProject(project.id)}>
                {project.name}
            </button>
        </li>
     );
}
 
export default Project;