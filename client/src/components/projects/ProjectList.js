import React, { useContext, useEffect } from 'react'
import Project from './Project'
import projectContext from '../../context/projects/projectContext'

const ProjectsList = () => {

    //Extract projects from Initial Sptate

    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    //Get projects once component is loaded
    useEffect(() => {
        getProjects();
    }, []);

    //Check if projects have content
    if(projects.length === 0 ) return <p>There are no projects. Start by creating one.</p>;

    

    return ( 
        <ul className='listado-proyectos'>
            { projects.map( project => (
                <Project
                key = {project.id} 
                project = {project}/>
            ))}
        </ul>
     );
}
 
export default ProjectsList;