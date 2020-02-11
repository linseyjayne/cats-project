import React from 'react';
import './App.css';

class App extends React.Component {
  render(){
    const { facts, handleCatsClick } = this.props;
    console.log(facts);
    return (
      <div className="App">
        <header className="App-header">
          cats cats cats
        </header>
        <p>
          <br />
          <button onClick={handleCatsClick}>pls give cats</button>
        </p>
      </div>
    );
  }
}

export default App;
