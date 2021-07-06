import React, { Fragment } from 'react'

const NewProject = () => {
    return (
        <Fragment>
        <button 
                type="button"
                className="btn btn-block btn-primario"
               
            >New Project</button>

        <form className='formulario-nuevo-proyecto'>
            <input type="text" name="name" placeholder="Name your Project" className='input-text'/>
            
            <input type="submit"
            className='btn btn-primario btn-block'
            value='Add Project'/>
        </form>
        </Fragment>
     );
}
 
export default NewProject;