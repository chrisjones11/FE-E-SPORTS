import React from 'react';
import './App.css'
import Navbar from './Navbar';
import Footer from './Footer';

import Game from './Game';
import Home from './Home';
import Betslip from './Betslip';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
      <div className='main'>
          <Navbar />  
          <div className="content row">  
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/game' component={Game}></Route>
            </Switch>
            <Betslip /> 
            </div> 
          <Footer/>
      </div>

      
      </BrowserRouter>
    );
  }
}



export default App;

