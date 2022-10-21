import axios from "axios";
import { setAlert  } from "./alert";
import { Navigate } from 'react-router-dom';

import {
    GET_PROFILE,
    PROFILE_ERROR
} from './types';

// Get Current users profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
};

// Create profile
export const createProfile = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const res = await axios.post('/api/profile', formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Profile created!', 'success'));

        return <Navigate to='/dashboard'  replace={true}/>  

    } catch (error) {
        const errors = error.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });

    }
}