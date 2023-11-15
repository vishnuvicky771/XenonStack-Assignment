import React from 'react';
import './SignInSignUp.css';
import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signup/SignUp';

function SignInSignUp(){
    return (
        <div className='signin-signup'>
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInSignUp;