import React from 'react';

import {Button} from 'react-bootstrap'

function About () {
    return(
        <div className= "col-md-8 about-container">
            <h1>RCity</h1>
            <p>Welcome to RCity, the app that lets you explore everything there is to do in Richmond, VA.
                Whether you are looking for somewhere to take a new date, go out on a Friday night, or enjoy
                a lazy Sunday afternoon, we have what you are looking for. Places are added by locals to showcase
                all the unique activities that Richmond has to offer.
            </p>
            <Button>Explore!</Button>
        </div>
    )
}

export default About;