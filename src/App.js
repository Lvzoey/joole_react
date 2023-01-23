import React, {useState, useEffect, useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Routes, Route, Link, useLocation, NavLink} from "react-router-dom";

import Login from "./components/Login";
import { clearMessage } from "./actions/messageAction";

import SignUp from "./components/SignUp";
import SearchProject from "./components/SearchProject";
import SearchProduct from "./components/SearchProduct";
import PrivateRoute from "./privateRoute";
const App = () => {
    // const dispatch = useDispatch();

    // let location = useLocation();
    //
    // useEffect(() => {
    //     if (["/login", "/signup"].includes(location.pathname)) {
    //         dispatch(clearMessage()); // clear message when changing location
    //     }
    // }, [dispatch, location]);

    // const logOut = useCallback(() => {
    //     dispatch(logout());
    // }, [dispatch]);

    return (
        <div>
            <div className="container mt-3">

                {/*<NavLink className={"to-login"} to={"/login"} replace>Log in</NavLink>*/}
                {/*<NavLink className={"to-signup"} to={"/signup"} replace>Sign up</NavLink>*/}
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route exact path="/search-project" element={<PrivateRoute/>}>
                        <Route exact path="/search-project" element={<SearchProject/>} />
                    </Route>
                    <Route exact path="/search-product" element={<PrivateRoute/>}>
                        <Route exact path="/search-product" element={<SearchProduct/>} />
                    </Route>
                    {/*<PrivateRoute path="/search-project" element={<SearchProject/>} />*/}
                    {/*<PrivateRoute path="/search-product" element={<SearchProduct/>} />*/}
                </Routes>
            </div>
        </div>
    );
};

export default App;
