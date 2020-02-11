import React from 'react';
import './App.css';
import isEmpty from 'lodash/isEmpty';


function CatFacts(data) {
  if (isEmpty(data.facts)) return null;
  const items = data.facts.map((fact) =>
    <li key={fact.id}>{fact.fact}</li>);
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
          <div>
          <button onClick={handleCatsClick}>pls give cats</button>
          <CatFacts facts={facts} />
          </div>
      </div>
    );
  }
}

export default App;
