import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    ACTIVATION_FAIL,
    ACTIVATION_SUCCESS,
    LOGOUT,
    AUTH_FAIL,
    AUTH_SUCCESS,
    PASSWORD_CONFIRM_FAIL,
    PASSWORD_CONFIRM_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_SUCCESS
} from '../actions/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
};

// export default function (state = initialState, action)
// {
//     const { type, payload } = action;
//     switch (type) {
//         case AUTH_SUCCESS:
//             return {
//                 ...state,
//                 isAuthenticated: true
//             }
//         case LOGIN_SUCCESS:
//             localStorage.setItem('access', payload.access)
//             localStorage.setItem('refresh', payload.refresh)
//             return {
//                 ...state,
//                 isAuthenticated: true,
//                 access: payload.access,
//                 refresh:payload.refresh
//             }
//         case SIGNUP_SUCCESS:
//             return {
//                 ...state,
//                 isAuthenticated:false
//             }
//         case SIGNUP_FAIL:
//         case LOGOUT:
//         case LOGIN_FAIL:
//             localStorage.removeItem('access')
//             localStorage.removeItem('refresh')
//             return {
//                 ...state,
//                 access: null,
//                 token: null,
//                 isAuthenticated:false,
//             }
//         case LOAD_USER_SUCCESS:
//             return {
//                 ...state,
//                 user:payload,

//             }
//         case AUTH_FAIL:
//             return {
//                     ...state,
//                     isAuthenticated: false
//                 }
//         case LOAD_USER_FAIL:
//             return {
//                 ...state,
//                 user:null,
//             }
//         case PASSWORD_CONFIRM_FAIL:
//         case PASSWORD_CONFIRM_SUCCESS:
//         case PASSWORD_RESET_FAIL:
//         case PASSWORD_RESET_SUCCESS:
//         case ACTIVATION_SUCCESS:
//             case ACTIVATION_FAIL:
//         return {
//                 ...state
//             }
//         default:
//             return state
//     }
// }
export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGIN_SUCCESS:
        
            localStorage.setItem('access', payload.access);
            localStorage.setItem('refresh', payload.refresh);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case AUTH_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }
        case LOAD_USER_FAIL:
            return {
                ...state,
                user: null
            }
        
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_CONFIRM_SUCCESS:
        case PASSWORD_CONFIRM_FAIL:
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
};
