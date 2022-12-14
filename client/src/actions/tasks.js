import axios from "axios";
import { setAlert } from "./alert";
import {
    DELETE_TASK,
    GET_TASKS,
    TASK_ERROR,
    ADD_TASK,
    GET_TASK,
    UPDATE_TASK
} from './types';

// Get Tasks
export const getTasks = () => async dispatch => {
    try {
        const res = await axios.get('/api/tasks');

        dispatch({
            type: GET_TASKS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: TASK_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}

// Delete Task
export const deleteTask = (id) => async dispatch => {
    try {
        await axios.delete(`/api/tasks/${id}`);

        dispatch({
            type: DELETE_TASK,
            payload: id
        });


        dispatch(setAlert('Task Removed', 'success'));
    } catch (error) {
        dispatch({
            type: TASK_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
        dispatch(setAlert('Only the Task creator may remove this task.', 'danger'));
    }
};

// Add Task
export const addTask = (formData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    try {
        const res = await axios.post('/api/tasks', formData, config);

        dispatch({
            type: ADD_TASK,
            payload: res.data
        });


        dispatch(setAlert('Task Created', 'success'));
    } catch (error) {
        dispatch({
            type: TASK_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
        dispatch(setAlert('Only the task created may remove that task.', 'danger'));
    }
};

// Update Task
export const updateTask = (formData, taskId) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    try {
        const res = await axios.put(`/api/tasks/${taskId}`, formData, config);

        dispatch({
            type: UPDATE_TASK,
            payload: res.data
        });


        dispatch(setAlert('Task Updated', 'success'));
    } catch (error) {
        dispatch({
            type: TASK_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
        dispatch(setAlert('Task failed to update.', 'danger'));
    }
};



// Get Task
export const getTask = (id) => async dispatch => {
    try {
        const res = await axios.get(`/api/tasks/${id}`);

        dispatch({
            type: GET_TASK,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: TASK_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}