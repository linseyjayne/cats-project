import React from 'react';
import './Card.css';

class Card extends React.Component {
    clicked = () => {
        this.props.onClick(this.props.cat.image.id);
    }

    render() {
        const { cat } = this.props;
        return <div className="cardContainer">
        <button onClick={this.clicked}>
            <img 
                src = {cat.image.url}
                alt = "this is a cat being cute (probably) "
            />
            {cat.fact.fact}
            </button>
        </div>
    }
};

export default Card;