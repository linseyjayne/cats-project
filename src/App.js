import React from 'react';
import isEmpty from 'lodash/isEmpty';

import './App.css';
import Card from './components/Card';

export const CatFacts = ({ data, handleFavoriteClick }) => {
  if (isEmpty(data)) return null;
  const items = data.map((cat) =>
    <li className="listItem" key={cat.image.id}><Card cat={cat} onClick={handleFavoriteClick} /></li>);
  return (
    <ul className="listOfCats">{items}</ul>
  );
}

export const FavoriteCatsButton = ({ data, handleDisplayFavoritesClick }) => {
  if (isEmpty(data)) return null;
  return (
    <button className="actionButton" onClick={handleDisplayFavoritesClick}>I only want to see my favorite cats</button>
  );
}


export const SortByLastWord = ({ data,handleSortByLastClick }) => {
  if (isEmpty(data)) return null;
  return (
    <button className="actionButton" onClick={handleSortByLastClick}>Sort these cats by the last word in their facts.</button>
  );
}

export const TooManyCats = ({ data, handleShowOneCat}) => {
  if (isEmpty(data)) return null;
  return (
    <button className="actionButton" onClick={handleShowOneCat}>THIS IS TOO MANY CATS</button>
  );
}


class App extends React.Component {
  render(){
    const { data, handleCatsClick } = this.props;
    let buttonText = "pls give more cats";
    if (isEmpty(data)) buttonText = "pls give cats";

    return (
      <div className="app">
        <header className="header">
          cats cats cats
        </header>
          <div className="body">
            <div>
              <CatFacts {...this.props}/>
            </div>
          <div className="actionButtonsSection">
            <button className="actionButton" onClick={handleCatsClick}>{buttonText}</button>
            <br />
            <FavoriteCatsButton {...this.props} />
            <br />
            <SortByLastWord {...this.props} />
            <br />
            <TooManyCats {...this.props} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
