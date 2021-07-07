import React from 'react'
import Project from './Project'

const ProjectsList = () => {

    const projects = [
        {name: 'Virtual Store'},
        {name: 'Intranet'},
        {name: 'Web design'}
    ]

    return ( 
        <ul className='listado-proyectos'>
            { projects.map( project => (
                <Project 
                project = {project}/>
            ))}
        </ul>
     );
}
 
export default ProjectsList;