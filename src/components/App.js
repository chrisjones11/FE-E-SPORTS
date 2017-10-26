import React from 'react';
import './App.css'
import Betslip from './Betslip'
import Game from './Game';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className='main'>
            <Switch>
              <div className="navigation ">
                <Navbar />
             </div>
              <div className="content row">
                <div className="newsgame col-9">
                <Route exact path='/' component= {Home}/>
                  {/* <Game /> */}
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
                <Footer />
              </div>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;

