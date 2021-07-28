import React, {useContext} from 'react'
import projectContext from '../../context/projects/projectContext';

const FormTask = () => {

    //Get if project is active
    const projectsContext = useContext(projectContext);
    const {project} = projectsContext;

    //If there is no project selected
    if(!project) return null;

    const [actualProject] = project;

    return ( 

        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input type="text"
                    className='input-text'
                    placeholder='Name the task'
                    name='name' />
</div>
                    <div className="contenedor-input">
                        <input 
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value='Add Task'/>
                    
                </div>
            </form>
        </div>
     );
}
 
export default FormTask;