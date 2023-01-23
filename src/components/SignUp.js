import React, {useState, useRef, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import LogInAndSignUp from '../Layout/LogIn-SignUp-Project';
import './SignUp.css';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../actions/authAction";
import {useNavigate} from "react-router-dom";
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

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = (value) => {
    // if (value.length < 3 || value.length > 20) {
    //     return (
    //         <div className="alert alert-danger" role="alert">
    //             The username must be between 3 and 20 characters.
    //         </div>
    //     );
    // }
};

const vpassword = (value) => {
    // if (value.length < 6 || value.length > 40) {
    //     return (
    //         <div className="alert alert-danger" role="alert">
    //             The password must be between 6 and 40 characters.
    //         </div>
    //     );
    // }
};

const Signup = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    // const [users, setUsers] = useState([]);

    let navigate = useNavigate();

    // const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log("getUsers");
    //     setUsers(getUsers());
    // },[])

    const onChangeUsername = (e) => {
        const userName = e.target.value;
        setUsername(userName);
        // if (getUserByName(userName) == null) {
        //     setUsername(userName);
        // } else {
        //     return (
        //         <div className="alert alert-danger" role="alert">
        //             This username is already used.
        //         </div>
        //     );
        // }
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(register(userName, email, password))
                .then(() => {
                    setSuccessful(true);
                    navigate("/login");
                    window.location.reload();
                })
                .catch(() => {
                    alert(store.getState().messageReducer.message);
                    setSuccessful(false);
                });
        }
    };

    return (
        <div className="col-md-12">
            <LogInAndSignUp/>
            <div className="signup-container">
                <Form onSubmit={handleRegister} ref={form}>
                    {!successful && (
                        <div>
                            <div className="form-group">
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="userName"
                                    value={userName}
                                    onChange={onChangeUsername}
                                    validations={[required, vusername]}
                                    placeholder = "Username"
                                />
                            </div>
                            <br/>
                            <div className="form-group">
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                    validations={[required, validEmail]}
                                    placeholder = "Email"
                                />
                            </div>
                            <br/>
                            <div className="form-group">
                                <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    validations={[required, vpassword]}
                                    placeholder = "Password"
                                />
                            </div>
                            <br/>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Sign Up</button>
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>
        </div>
    );
};

export default Signup;