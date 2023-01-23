import React, {useState, useRef, Component, useEffect} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {Navigate, NavLink, useNavigate} from 'react-router-dom';
import './Login.css';
import LogInAndSignUp from '../Layout/LogIn-SignUp-Project';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../actions/authAction";
import store from "../store";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const Login = (props) => {
    let navigate = useNavigate();
    const form = useRef();
    const checkBtn = useRef();

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // const { message } = useSelector(state => state.message);

    const { isLoggedIn } = store.getState().authReducer.isLoggedIn;
    // useEffect((user) => {
    //         if (user) {
    //            return <Navigate to="/search" />;
    //
    //         } else {
    //             return <Navigate to="/signup" />;
    //         }
    // });

    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        console.log("setName");
        const userName = e.target.value;
        setUsername(userName);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
        console.log("setPassword");
    };

    const handleLogin = (e) => {
        console.log("handle login");
        e.preventDefault();
        dispatch(login(userName, password))
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(userName, password))
                .then(() => {
                    navigate("/search-project");
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    if (isLoggedIn) {
        console.log("success");
        return <Navigate to="/search-project" />;
    }

    return (
        <div className="col-md-12">
            <LogInAndSignUp/>
            <NavLink className={"to-signup"} to={"/signup"} replace>Sign up</NavLink>
            <div className="login-container">
                <Form onSubmit={handleLogin} ref={form}>
                    <div className="inputForm">
                        <Input
                            type="text"
                            className="form-control"
                            name="userName"
                            value={userName}
                            onChange={onChangeUsername}
                            validations={[required]}
                            placeholder = "Username"
                        />
                    </div>
                    <br/>
                    <div className="inputForm">
                        <Input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}
                            placeholder = "Password"
                        />
                    </div>
                    <br/>
                    <div className="inputForm">
                        <button className="log-in-button">
                            Log In
                        </button>
                    </div>

            {/*        {message && (*/}
            {/*            <div className="form-group">*/}
            {/*                <div className="alert alert-danger" role="alert">*/}
            {/*                    {message}*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        )}*/}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>
        </div>
    );
};

export default Login;