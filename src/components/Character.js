import React from 'react';
import {Link} from 'react-router-dom';

export default function Character(props) {
    
    return(
        <section className="character-list"> 
            <Link to={`/${props.id}`}> 
                <h2>{props.name}</h2>
            </Link> 
        </section>
    )
}