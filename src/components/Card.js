// IMAGE
// FACT

import React from 'react';
import './Card.css';


export const Card = (fact) => {
    console.log(fact);
    return <div className="cardContainer">
        <div className="box" />
        {fact.fact}
        </div>
};