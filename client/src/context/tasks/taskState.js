import React, {useReducer} from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

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
    }

    //Create dispatch and state
    const [ state, dispatch] = useReducer( TaskReducer, initialState);

    return (
        <TaskContext.Provider
        value = {{
            tasks: state.tasks
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;