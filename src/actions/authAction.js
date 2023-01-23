import AuthService from "../services/authService";
import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, SET_MESSAGE, LOGOUT} from "./action-type";

export const register = (userName, password , email) => (dispatch) => {
    return AuthService.register(userName, password, email).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const login = (userName, password) => (dispatch) => {
    return AuthService.login(userName, password).then(
        (data) => {
            console.log(data)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });
            console.log(data)
            return Promise.resolve();
        },
        (error) => {
            console.log("login fail")
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message)
            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};

// export const getUsers = () => (dispatch) => {
//     AuthService.getUsers();
// }

// export const getUserByName = (name) => {
//     AuthService.getUserByName(name);
// }