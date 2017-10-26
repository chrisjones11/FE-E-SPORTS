import React from 'react';
import './App.css'
import Betslip from './Betslip'
import Game from './Game';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

class App extends React.Component {
  render () {
    return (
      <div>
      <div className='main'>
        <div className="navigation ">
          <Navbar />
           
        </div>
        <div className="content row">
          <div className="newsgame col-9">
            {/* {<Home />} */}
         <Game />
            <p>Start working from <code>/src/components/App.js</code></p>
          </div>
          <div className="betslip-outer col-3">
            <div className='betslip row'>
              <div className="col-12 betmain">
              <Betslip />
              </div>
            </div>
          </div>
        </div>
        <div >
          <Footer/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;

