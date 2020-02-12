import React from 'react';
import './Card.css';

export const Card = (fact) => {
    return <div className="cardContainer">
        <div className="box" />
        {fact.fact}
    </div>
};