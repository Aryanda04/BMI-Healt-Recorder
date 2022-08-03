import React, {useRef} from 'react';
import {auth} from '../firebase'
import loginPicture from '../assets/loginPicture.png';

const SignIn = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user =>{
            console.log(user)
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <>
        <div class="login-page-container">
	<div class="login-page-left">

        <img src={loginPicture} alt='Login Picture Image'/>
    
    </div>
	<div class="login-page-right">
        <form action=''>
                <h1>Login</h1>
                <div className='login-form-container'>
                    <label>Email </label>
                <input ref={emailRef}type="email" placeholder='Email'></input>
                <label>
                Password </label>
                <input ref={passwordRef} type='password' placeholder='Password'></input>
                
                <button onClick={signIn}>Login</button>
                </div>
        </form>
    </div>
</div>
        </>
    )
}

export default SignIn;