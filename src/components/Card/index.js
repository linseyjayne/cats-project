import React from 'react';
import './styles.css';

class Card extends React.Component {
    clicked = () => {
        this.props.onClick(this.props.cat.image.id);
    }

    render() {
        const { cat } = this.props;
        return <div className="cardContainer">
        <button className="buttonSize" onClick={this.clicked}>
            <img 
                className="imageSize"
                src = {cat.image.url}
                alt = "this is a cat being cute (probably) "
            />
            {cat.fact.fact}
            </button>
        </div>
    }
};

export default Card;