import { Button, FormControl, FormGroup, IconButton, Input, InputLabel, Tooltip } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/styles/auth.scss';
import { API, BASE_URL } from "../constants/api";
import { ROUTES } from "../constants/routes";
import { InfoOutlined } from '@mui/icons-material';
import { authAction } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function Auth() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    });
    function handleInput(e) {
        setLoginForm({
            ...loginForm,
            [`${e.target.id}`]: e.target.value
        })
    }
    function handleSubmit() {
        // Working creds
        // username: 'emilys',
        // password: 'emilyspass',
        axios.post(BASE_URL + API.LOGIN, {
            ...loginForm
        }).then(res => {
            if (res.status === 200) {
                dispatch(authAction.setToken(res.data.accessToken))
                navigate(ROUTES.DASHBOARD)
            }
        })
    }
    const tooltipText =
        `Try using following creds ->
        username: emilys,
        password: emilyspass`

    return (<div className="login-container">

        <FormGroup className="form-input-container">
            <div className="form-input-header-container">
                <p className="form-input-heading">Login Form</p>
                <Tooltip title={tooltipText}>
                    <IconButton>
                        <InfoOutlined />
                    </IconButton>
                </Tooltip>
            </div>
            <FormControl>
                <InputLabel htmlFor="username">Username:</InputLabel>
                <Input id="username" value={loginForm.username} onChange={handleInput} />
            </FormControl>

            <FormControl className="form-input-password">
                <InputLabel htmlFor="password">Password:</InputLabel>
                <Input id="password" value={loginForm.password} onChange={handleInput} type="password" />
            </FormControl>
            <Button className="event-form-submit" onClick={handleSubmit}>Submit</Button>
        </FormGroup>
    </div>)
}