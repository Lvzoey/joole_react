import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import store from "./store";

const PrivateRoute = ( {component: Component, ...rest} )=>{
    let isLogin = localStorage.getItem('user');

    if (isLogin) {
        return <Outlet />;
    } else {
        alert("Please login first");
        return <Navigate to="/login" />;
    }
}

export default PrivateRoute;