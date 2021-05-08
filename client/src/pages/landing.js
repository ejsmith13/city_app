import React from 'react';
import LoginButton from '../components/LoginBtn'
import SignupButton from '../components/SignUpBtn'
import LogoutButton from '../components/LogoutBtn'
import AuthenticationButton from '../components/AuthenticationBtn'


const Landing =()=> {
    return(
        <div>
            <h1>this is the landing page</h1>
            <LoginButton/>
            <SignupButton />
            <LogoutButton/>
            <AuthenticationButton/>

            
        </div>
    )
}

export default Landing;