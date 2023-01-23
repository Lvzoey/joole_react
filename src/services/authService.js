import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8080";

const register = (userName, email, password) => {
    return axios.post(API_URL + "/user/createUser", {
        userName,
        password,
        email
    });
};

const login = (userName, password) => {
    console.log("axios login")
    return axios
        .post(API_URL + "/user/authenticate", {
            userName,
            password,
        })
        .then((response) => {
            console.log(response)
            if (response.data) {
                localStorage.setItem("user", JSON.stringify(response.data));
                localStorage.setItem("userName", userName);
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("productName");
    localStorage.removeItem("userName");
};

// const getUsers = () => {
//     return axios.get(API_URL + "/user/user", {headers: authHeader()});
// }

// const getUserByName = (name) => {
//     return axios.get(API_URL + "/user/getUserByName" + name, {headers: authHeader()});
// }

export default {
    register,
    login,
    logout,
};