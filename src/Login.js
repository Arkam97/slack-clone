import React, { useState } from 'react';
import './login.css';
import logo from './logo.png'
import Button from '@material-ui/core/Button';
import {auth,provider} from './firebase';
import {useStateValue} from './stateprovider';
import {actionTypes} from './reducer';

function Login() {

    const [{user},dispatch]= useStateValue();

    const signin = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            if(result)
            {
                dispatch({
                    type : actionTypes.SET_USER ,
                    user : result.user 
                });
            }
                  
            // console.log(result.user.displayName);
        }).catch((err) => {
            alert(err.message);
        });

    }

    console.log(user);
    return (
        <div className="login">
            <div className="login_container">
                <img className="logo" src={logo} alt=""/>
                <h1>Sign in to Code Best Lab</h1>
                <Button onClick={signin}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
