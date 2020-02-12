import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        const { fact, handleFavoriteClick } = this.props;
        return <div className="cardContainer">
        <button onClick={handleFavoriteClick}>
            <div className="box" />
            {fact.fact}
            </button>
        </div>
    }
};

export default Card;