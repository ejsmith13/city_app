import React from 'react';

function CloseBtn (props) {
    return(
        <h3 onClick={props.exit}><i className="fas fa-times closeBtn"></i></h3>
    )
}
export default CloseBtn