import axios from "axios";
import { setAlert } from "./alert";
import {
    GET_TASKS,
    TASK_ERROR
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