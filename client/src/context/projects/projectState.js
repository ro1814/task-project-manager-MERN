import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM, ACTUAL_PROJECT, DELETE_PROJECT } from "../../types/index";

import { v4 as uuidv4 } from 'uuid';

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "Virtual Store" },
    { id: 2, name: "Intranet" },
    { id: 3, name: "Web design" },
    { id: 4, name: "MERN" },
  ];
  const initialState = {
    projects: [],
    form: false,
    errorform: false,
    project: null
  };
  // Dispatch to excecute actions

  const [state, dispatch] = useReducer(projectReducer, initialState);

  //Functions to Project CRUD
  const showForm = () => {
    dispatch({
      type: PROJECT_FORM,
    });
  };
  //Obtain projects
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  //ADD new project function
  const addProject = project => {
      project.id = uuidv4();

      //Insert project into state through dispacth
      dispatch({
          type: ADD_PROJECT,
          payload: project
      })
  }

  //Validate form through errors
  const showError = () => {
      dispatch({
          type: VALIDATE_FORM
      })
  }

  //Select the project that user clicks
  const actualProject = projectID => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectID
    })
  }
  
  //Delete a project
  const deleteProject = projectID => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectID
    })
  }

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorform: state.errorform,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        showError,
        actualProject,
        deleteProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
