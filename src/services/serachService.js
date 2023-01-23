import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8080";

const getProjectList = (userName) => {
    return axios.get(API_URL + "/project/user/" + userName,
        {headers: authHeader()});
};

const getProductList = (projectId) => {
    console.log("products")
    return axios.get(API_URL + "/search/search-project/" + projectId,
        {headers: authHeader()});
}

const getProductsByName = (productName) => {
    return axios.get(API_URL + "/search/search-product/" + productName, {headers: authHeader()});
}

// const saveProduct = (productName) => {
//     console.log(productName)
//     return axios
//         .get(API_URL + "/search/search-product/" + productName, {headers: authHeader()})
//         // .then((response) => {
//         //     console.log(response)
//         //     if (response.data) {
//         //         localStorage.setItem("product", JSON.stringify(response.data));
//         //     }
//         //     return response.data;
//         // });
// }

export default {
    getProjectList,
    getProductList,
    getProductsByName
};