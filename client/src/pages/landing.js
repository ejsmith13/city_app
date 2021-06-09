import React from 'react';
import LoginButton from '../components/LoginBtn'



const Landing =()=> {
    return(
        <div className="landing">

            <div className= "welcomeContainer">
                <h1> R City:</h1>
                <h2 style={{paddingBottom: "45%"}}>Explore Richmond the Local Way</h2>
                

                <LoginButton 
               />

            </div>
        

            
        </div>
    )
}

export default Landing;