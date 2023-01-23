// import SearchService from "../services/serachService";
// import {GET_PROJECTS_FAIL, GET_PROJECTS_SUCCESS,SET_MESSAGE} from "./action-type";
//
// export const getProjects = () => (dispatch) => {
//     console.log("searchAction")
//     return SearchService.getProjectList().then(
//         (response) => {
//             dispatch({
//                 type: GET_PROJECTS_SUCCESS,
//             });
//
//             dispatch({
//                 type: SET_MESSAGE,
//                 payload: response.data.message,
//             });
//
//             return Promise.resolve();
//         },
//         (error) => {
//             const message =
//                 (error.response &&
//                     error.response.data &&
//                     error.response.data.message) ||
//                 error.message ||
//                 error.toString();
//
//             dispatch({
//                 type: GET_PROJECTS_FAIL,
//             });
//
//             dispatch({
//                 type: SET_MESSAGE,
//                 payload: message,
//             });
//             return Promise.reject();
//         }
//     );
// }