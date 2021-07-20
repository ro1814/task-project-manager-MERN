import React, {useReducer} from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { PROJECT_FORM, GET_PROJECTS } from '../../types/index';



const ProjectState = props => {
    const projects = [
        {id: 1, name: 'Virtual Store'},
                {id: 2, name: 'Intranet'},
                {id: 3, name: 'Web design'},
                {id: 4, name: 'MERN'},
    ]
    const initialState = {
        projects : [],
        form : false
    }
    // Dispatch to excecute actions

    const [state, dispatch] = useReducer(projectReducer, initialState)

    //Functions to Project CRUD
    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        })
    }
    //Obtain projects
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    return (
        <projectContext.Provider
        value = {{
            projects: state.projects,
            form: state.form,
            showForm,
            getProjects
        }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;
