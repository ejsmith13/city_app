import React from 'react';
import { Link } from 'react-router-dom';


function Container (props){
    return(
        <ul className="list-group search-results row" >
       {props.places.map((place) => {
           return(
               <Link to={"/locations/" + place._id} className="link">
               <div key={place._id} className="listContainer col-md-10">
                <li className="list-group-item row search-list">
                    <img src= {place.image} alt={place.name} className="thumbnail col-md-2"/>
                   <h3 className="row" >{place.name}</h3>
                   <p className="row">{place.synopsis}</p>
               </li>
               </div>
               </Link>
              
           )
       })}
       </ul>
    )
}

export default Container;