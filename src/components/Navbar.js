import React from 'react';


class Navbar extends React.Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded row">
                <div className="col-4">
                    <a className="navbar-brand" href="./index.html"> <img className='logo' src="http://res.cloudinary.com/diohwb5lp/image/upload/v1508857185/final_logo_ekuyip.png"></img></a>
                </div>
                <div className="col-6 navblock">
                    <div className="row">
                    <div className="col-4 navbutton">
                        live games
                    </div>
                    <div className="col-4 navbutton">
                        upcoming
                    </div>
                    <div className="col-4 navbutton">
                        news
                    </div>
                    </div>
                </div>
                <div className="col-2 login">
                    <a className="btn btn-default btn-work" href="#">Login</a>
                    
                </div>
            </nav>
            
                    
                    
               
                
            
        </div>
    )   
  }
}

export default Navbar;