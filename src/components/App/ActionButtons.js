import React from 'react';
import './styles.css';
import isEmpty from 'lodash/isEmpty';

const FavoriteCatsButton = ({ data, handleDisplayFavoritesClick }) => {
    if (isEmpty(data)) return null;
    return (
      <button className="actionButton" onClick={handleDisplayFavoritesClick}>Show me only my favorite cats</button>
    );
  }
  
  const SortByLastWord = ({ data,handleSortByLastClick }) => {
    if (isEmpty(data)) return null;
    return (
      <button className="actionButton" onClick={handleSortByLastClick}>Show these cats sorted by the last word in their facts</button>
    );
  }
  
  const TooManyCats = ({ data, handleShowOneCat}) => {
    if (isEmpty(data)) return null;
    return (
      <button className="actionButton" onClick={handleShowOneCat}>Show me just one cat</button>
    );
  }

const ActionButtons = ({ data, handleCatsClick}) => {
    let buttonText = "Show me more cats!";
    if (isEmpty(data)) buttonText = "Show me cats!";
    return (
        <div className="actionButtonsSection">
            <button className="actionButton" onClick={handleCatsClick}>{buttonText}</button>
            <br />
            <FavoriteCatsButton {...this.props} />
            <br />
            <SortByLastWord {...this.props} />
            <br />
            <TooManyCats {...this.props} />
        </div>
    );
};

export default ActionButtons;