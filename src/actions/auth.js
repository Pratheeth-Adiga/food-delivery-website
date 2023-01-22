import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    ACTIVATION_FAIL,
    ACTIVATION_SUCCESS,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT,
    AUTH_FAIL,
    AUTH_SUCCESS,
    PASSWORD_CONFIRM_FAIL,
    PASSWORD_CONFIRM_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_SUCCESS
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
    }
    else {
        dispatch({
            type: LOAD_USER_FAIL
        });
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



export const signup = ( email,password, re_password,Role) => async dispatch => {
    console.log("here")
   

    

    try {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        };
        const body = JSON.stringify({ email,password,re_password,Role});
        const res = await axios.post('http://localhost:8000/auth/users/', body, config);
        console.log(res.data)
        dispatch({
            type:SIGNUP_SUCCESS,
            payload: res.data
        });

      
    } catch (err) {
        console.log(err)
        dispatch({

            type:SIGNUP_FAIL
        })
    }
};



// export const verify = (uid,token) => async dispatch => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     const body = JSON.stringify({ uid,token});

//     try {
//         await axios.post('http://localhost:8000/auth/users/activation/', body, config);
//         dispatch({
//             type:ACTIVATION_SUCCESS,
           
//         });

      
//     } catch (err) {
//         dispatch({
//             type:ACTIVATION_FAIL
//         })
//     }
// };

export const reset_password = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify({ email })
    try {
        await axios.post('http://localhost:8000/auth/users/reset_password/', body, config);
        dispatch({
            type: PASSWORD_RESET_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: PASSWORD_RESET_FAIL
        });
    };
};

export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify({ uid, token, new_password, re_new_password });
    try {
        await axios.post('http://localhost:8000/auth/users/reset_password_confirm/', body, config);
        dispatch({
            type: PASSWORD_CONFIRM_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: PASSWORD_CONFIRM_FAIL
        });
    };
};

export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT
    })
};
