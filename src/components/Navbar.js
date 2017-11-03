import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import Account from './Account'



class Navbar extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
          // this.props.fetchAccount();
          
    }

   

  render() {

    return (
        <div className="navigation ">
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded row">
                <div className="col-4">
                <NavLink exact to="/"><img className='logo' src="http://res.cloudinary.com/diohwb5lp/image/upload/v1508857185/final_logo_ekuyip.png"alt ="logo"></img></NavLink>
                </div>
                <div className="col-6 navblock">
                    <div className="row">
                    <div className="col-4 navbutton">
                        <NavLink className='navbutton' to="/game">live games</NavLink>
                    </div>
                    <div className="col-4 navbutton">
                        <NavLink className='navbutton' to="/game">upcoming</NavLink>
                    </div>
                    <div className="col-4 navbutton">
                        <NavLink className='navbutton' to="/game">news</NavLink>
                    </div>
                    </div>
                </div>
                
                    <Account />
                
            </nav>
            
                    
                    
               
                
            
        </div>
    )   
  }
}


  
  export default Navbar;
  