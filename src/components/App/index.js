import React from 'react';

import './styles.css';
import Instructions from './Instructions';
import CatFacts from './CatFacts';
import ActionButtons from './ActionButtons';

class App extends React.Component {
  render(){
    return (
      <div className="app">
        <header className="header">
          cats cats cats
        </header>
          <div className="body">
              <CatFacts {...this.props} />
              <Instructions />
              <ActionButtons {...this.props} />
          </div>
      </div>
    );
  }
}

export default App;
