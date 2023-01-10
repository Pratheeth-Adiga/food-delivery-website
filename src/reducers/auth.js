import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT,
    AUTH_FAIL,
    AUTH_SUCCESS
} from '../actions/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
};

export default function (state = initialState, action)
{
    const { type, payload } = action;
    switch (type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access)
            localStorage.setItem('refresh', payload.refresh)
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh:payload.refresh
            }
        case LOGOUT:
        case LOGIN_FAIL:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...state,
                access: null,
                token: null,
                isAuthenticated:false,
            }
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                user:payload,

            }
        case AUTH_FAIL:
            return {
                    ...state,
                    isAuthenticated: false
                }
        case LOAD_USER_FAIL:
            return {
                ...state,
                user:null,
            }
        default:
            return state
    }
}