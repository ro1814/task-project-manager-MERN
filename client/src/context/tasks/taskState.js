import React, {useReducer} from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import { PROJECT_TASKS, ADD_TASK } from '../../types';

const TaskState = props => {
    const initialState = {
        tasks: [
            {name: 'Choose platform', state: true, projectId: 1},
            {name: 'Choose colors', state: false, projectId: 2},
            {name: 'Choose payment platform', state: false, projectId: 3},
            {name: 'Choose Hosting service', state: true, projectId: 4},
            {name: 'Choose platform', state: true, projectId: 1},
            {name: 'Choose colors', state: false, projectId: 2},
            {name: 'Choose payment platform', state: false, projectId: 3},
        ],
        projectasks: null
    }

    //Create dispatch and state
    const [ state, dispatch] = useReducer( TaskReducer, initialState);
    //Create tasks functions

    //Get tasks projects
    const getTasks = projectId => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        })
    }
    
    //Add task to chosen project
    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    return (
        <TaskContext.Provider
        value = {{
            tasks: state.tasks,
            projectasks : state.projectasks,
            getTasks,
            addTask,
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;