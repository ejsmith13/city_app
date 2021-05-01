import React from 'react';
import './stle.css';


const Marker = (props) => {
    return (
        <div className = "marker"
            style={{ backgroundColor: props.color, cursor: 'pointer'}}
        title={props.name}>
        </div>
    )
}

export default Marker;