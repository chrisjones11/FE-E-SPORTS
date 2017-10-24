import React from 'react';
import './App.css'
import Betslip from './Betslip'
import Game from './Game';
import Navbar from './Navbar';

class App extends React.Component {
  render () {
    return (
      <div>
        <div className="navigation ">
          <Navbar />
           
        </div>
        <div className="content row">
          <div className="newsgame col-9">
         <Game />
            <p>Start working from <code>/src/components/App.js</code></p>
          </div>
          <div className="betslip-outer col-3">
            <div className='betslip row'>
              <div className="col-12">
              <Betslip />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

