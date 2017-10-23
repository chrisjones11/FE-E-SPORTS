import React from 'react';
import './App.css'
import Betslip from './Betslip'

class App extends React.Component {
  render () {
    return (
      <div>
        <div className="navigation row">
        <h1>Welcome to React</h1>
        </div>
        <div className="content row">
          <div className="newsgame col-9">
            <h1>This is where the content will live</h1>
            <p>Start working from <code>/src/components/App.js</code></p>
          </div>
          <div className="betslip col-3">
            <Betslip />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

