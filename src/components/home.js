import React from 'react';
import {auth} from '../firebase'
import ProfileForm from './profileForm';

const Home = () => {
    return (
        <div className='App'>
            <h1>WELCOME HOME</h1>
            <ProfileForm/>
            <button onClick={()=>auth.signOut()}>Logout</button>
        </div>
    )
}

export default Home;