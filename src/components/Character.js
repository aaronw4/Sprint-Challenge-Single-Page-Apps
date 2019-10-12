import React from 'react';
import {Link} from 'react-router-dom';

export default function Character(props) {
    console.log(props.names)

    return(
        <section className="character-list"> 
            <Link to={`/character/${props.id}`}>   
                {props.names.map(name => (
                    <h2>{name}</h2>
                ))} 
            </Link> 
        </section>
    )
}