import React from 'react';
import './style.css'

function Container (props){
    return(
        <ul className="list-group search-results row" >
       {props.places.map((place) => {
           return(
               <div key={place._id} className="listContainer col-md-10">
                    <li className="list-group-item row">
                    <img src= {place.image} alt={place.name} className="thumbnail col-md-2"/>
                   <h3 className="col">{place.name}</h3>
                   <p className="col">{place.synopsis}</p>
               </li>
               </div>
              
           )
       })}
       </ul>
    )
}

export default Container;