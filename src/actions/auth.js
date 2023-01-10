import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT,
    AUTH_FAIL,
    AUTH_SUCCESS
} from './types';
import axios from 'axios';


export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        const body = JSON.stringify({ token: localStorage.getItem('access') });
        try {
            const res = await axios.post('http://localhost:8000/auth/jwt/verify', body, config);
            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AUTH_SUCCESS
                });
            }
            else {
                dispatch({
                    type: AUTH_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: AUTH_FAIL
            });
        }
    }
    else {
        dispatch({
            type: AUTH_FAIL
        });
    }
};


export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        try {
            const res = await axios.get('http://localhost:8000/auth/users/me/', config);
            console.log(res.data)
            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            console.log(err)
            dispatch({
                type: LOAD_USER_FAIL
            });
        }
        // } else {
        //     dispatch({
        //         type: LOAD_USER_FAIL
        //     });
        // }
    }
};


export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('http://localhost:8000/auth/jwt/create/', body, config);
        console.log(res.data)
        dispatch({
            type: LOGIN_SUCCESS,
            
            payload: res.data
        });

        dispatch(load_user());
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
};

export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT
    })
}
