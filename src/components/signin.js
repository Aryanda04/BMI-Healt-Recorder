import React, {useRef} from 'react';
import {auth} from '../firebase'

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
        <div className='signin'>
            <form action=''>
                <h1>signin</h1>
                <input ref={emailRef}type="email"></input>
                <input ref={passwordRef} type='password'></input>
                <button onClick={signIn}>Submit</button>
            </form>
            sIGNin
        </div>
    )
}

export default SignIn;