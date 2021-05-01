import React from 'react';

function Container (props){
    return(
        <ul className="list-group search-results" >
       {props.places.map((place) => {
           return(
               <li key={place.name} className="list-group-item">
                   <h1>{place.name}</h1>
                   <p>{place.synopsis}</p>
               </li>
           )
       })}
       </ul>
    )
}

export default Container;