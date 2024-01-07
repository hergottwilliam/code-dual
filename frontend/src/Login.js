import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';


function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8080/login', values)
            .then(res => {
                if (res.data === "Success") {
                    navigate("/home");
                } else {
                    alert("No record exists");
                }
            })
            .catch(err => console.log(err));
        }
    }

    return (
            <div className={"mainContainer"}>
                <div className='titleContainer'>
                    <h2>Log in</h2>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className={"inputContainer"}>
                        <input type='email' placeholder='Enter email' name='email'
                        onChange={handleInput} className={"inputBox"}/>
                        <label className="errorLabel">{errors.email}</label>
                    </div>
                    <div className={"inputContainer"}>   
                        <input type='password' placeholder='Enter password' name='password'
                        onChange={handleInput} className={"inputBox"}/>
                        <label className="errorLabel">{errors.password}</label>
                    </div>
                    <div className={"inputContainer"}>
                        <button type='submit' className={"inputButton"}><strong>Log in</strong></button>
                        <Link to="/signup" className={"inputButton"}>Create Account</Link>
                    </div>  
                </form>
            </div>
    )
}

export default Login;