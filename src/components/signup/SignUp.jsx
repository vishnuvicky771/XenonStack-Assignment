import React, { useState } from 'react';
import './SignUp.css';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../redux/user/userActions';

function SignUp() {
    const dispatch=useDispatch();
    let [credentials, SetCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const {displayName,email,password,confirmPassword}=credentials;

    function handleChange(event) {
        const { name, value } = event.target;
        SetCredentials((prevValues) => {
            return {
                ...prevValues,
                [name]: value,
            };
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        dispatch(signUpStart({email,password,displayName }));
    }

    return (
        <div className='signup'>
            <h1>I don't have an account</h1>
            <h3>Sign up with your email and password.</h3>
            <form onSubmit={handleSubmit}>
                <FormInput name='displayName' label='Display Name' type='text' value={displayName} handleChange={handleChange} />
                <FormInput name='email' label='Email' type='email' value={email} handleChange={handleChange} />
                <FormInput name='password' label='Password' type='password' value={password} handleChange={handleChange} />
                <FormInput name='confirmPassword' label='Confirm password' type='password' value={confirmPassword} handleChange={handleChange} />
                <div className='signup-options'>
                    <CustomButton type={'submit'} size={'button-medium'} > SIGN UP </CustomButton>
                </div>
            </form>
        </div>
    );
}


export default SignUp;