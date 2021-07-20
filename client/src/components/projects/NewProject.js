import React, { Fragment, useContext, useState } from 'react';
import projectContext from '../../context/projects/projectContext'

const NewProject = () => {

    // Get the form State
    const projectsContext = useContext(projectContext);
    const { form, showForm } = projectsContext;

    //State for Project
    const [ project, saveProject ] = useState({
        name: '',

    });

    //Extract name of the project

    const { name } = project;

    //Read the input's content

    const onChangeProject = e => {
        saveProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    //When user sends a project
    const onSubmitProject = e =>{
        e.preventDefault();

        //Validate Project

        //Add to state

        //Reset the form
    }

    //Show form 
    const onClickForm = () => {
        showForm()
    }

    return (
        <Fragment>
        <button 
                type="button"
                className="btn btn-block btn-primario"
                onClick = { onClickForm }
            >New Project</button>

        { form ? (
                <form className='formulario-nuevo-proyecto' onSubmit= { onSubmitProject }>
            <input type="text" name="name" placeholder="Name your Project" className='input-text' onChange={ onChangeProject }
            value={name}/>
            
            <input type="submit"
            className='btn btn-primario btn-block'
            value='Add Project'/>
        </form>
            )
        : null
        }
        </Fragment>
     );
}
 
export default NewProject;