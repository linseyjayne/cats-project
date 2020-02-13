import React from 'react';
import './styles.css';
import isEmpty from 'lodash/isEmpty';

const AdditionalActions = ({ data, handleDisplayFavoritesClick, handleSortByLastClick, handleShowOneCat}) => {
    if (isEmpty(data)) return null;
    return ( 
    <div>
        <button className="actionButton" onClick={handleDisplayFavoritesClick}>
            Show me only my favorite cats
        </button> 
        <button className="actionButton" onClick={handleSortByLastClick}>
            Show these cats sorted by the last word in their facts
        </button>
        <button className="actionButton" onClick={handleShowOneCat}>
            Show me just one cat
        </button>
    </div>
    );
};

const ActionButtons = (props) => {
    const { data, handleCatsClick } = props;
    let buttonText = "Show me more cats!";
    if (isEmpty(data)) buttonText = "Show me cats!";
    return (
        <div className="actionButtonsSection">
            <button className="actionButton" onClick={handleCatsClick}>{buttonText}</button>
            <AdditionalActions {...props} />
        </div>
    );
};

export default ActionButtons;