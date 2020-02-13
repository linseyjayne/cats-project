import React from 'react';
import './Card.css';

class Card extends React.Component {
    clicked = () => {
        this.props.onClick(this.props.fact);
    }

    render() {
        const { fact } = this.props;
        return <div className="cardContainer">
        <button onClick={this.clicked}>
            <div className="box" />
            {fact.fact}
            </button>
        </div>
    }
};

export default Card;