import React from 'react';
import isEmpty from 'lodash/isEmpty';

import './App.css';
import Card from './components/Card';

export const CatFacts = ({ data, handleFavoriteClick }) => {
  if (isEmpty(data)) return null;
  const items = data.map((cat) =>
    <li key={cat.image.id}><Card cat={cat} onClick={handleFavoriteClick} /></li>);
  return (
    <ul>{items}</ul>
  );
}

class App extends React.Component {
  render(){
    const { handleCatsClick } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          cats cats cats
        </header>
          <div className="Body">
            <div>
              <CatFacts {...this.props}/>
            </div>
          <button onClick={handleCatsClick}>pls give cats</button>

          </div>
      </div>
    );
  }
}

export default App;
