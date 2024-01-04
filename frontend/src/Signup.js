import React from "react";
import { Link } from "react-router-dom";

function Signup() {
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign up</h2>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type='name' placeholder='Enter name' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter email' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter password' className='form-control rounded-0'/>
                    </div>
                    <button className='btn btn-success w-100'><strong>Create account</strong></button>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text decoration-none'>Log in</Link>
                </form>
            </div>
        </div>
    )
};

export default Signup;