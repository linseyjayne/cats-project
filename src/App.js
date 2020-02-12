import React from 'react';
import isEmpty from 'lodash/isEmpty';

import './App.css';
import Card from './containers/Card';

function CatFacts(data) {
  if (isEmpty(data.facts)) return null;
  const items = data.facts.map((fact) =>
    <li key={fact.id}><Card fact={fact} /></li>);
  return (
    <ul>{items}</ul>
  );
}

class App extends React.Component {
  render(){
    const { facts, handleCatsClick } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          cats cats cats
        </header>
          <div className="Body">
            <div>
              <CatFacts facts={facts} />
            </div>
          <button onClick={handleCatsClick}>pls give cats</button>

          </div>
      </div>
    );
  }
}

export default App;
