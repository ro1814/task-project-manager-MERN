import React, { useContext, useState } from 'react'
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const FormTask = () => {

    //Get if project is active
    const projectsContext = useContext(projectContext);
    const {project} = projectsContext;

    //Get the context (task) function
    const tasksContext = useContext(taskContext);
    const { addTask } = tasksContext; 

    //Form state
    const [ task, saveTask ] = useState({
        name: ''
    })

    //Get project name
    const {name} = task;

    //If there is no project selected
    if(!project) return null;

    //Read the form values
    const handleChange = e => {
        saveTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const [actualProject] = project;
    const onSubmit = e =>{
        e.preventDefault();

        //Validate

        //Pass validation

        //Add new task to tasks state
        task.projectId = actualProject.id;
        task.state = false;
        addTask(task);

        //Reset form
    }

    return ( 

        <div className="formulario">
            <form
            onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input type="text"
                    className='input-text'
                    placeholder='Name the task'
                    name='name'
                    value={name} 
                    onChange={handleChange}/>
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