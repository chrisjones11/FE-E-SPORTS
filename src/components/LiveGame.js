import React from 'react';
import './LiveGame.css';


class LiveGame extends React.Component {
  render() {
    return (
        <div>       
            <div className="row">
                <div className="col-12">
                    <img className="livethumbnail" src="https://i.ytimg.com/vi/5MuZmHEGqXQ/maxresdefault.jpg"></img>
                </div>
            </div> 
            <div className="row">
                <div className="col-12 smalltext">
                    <p>Team A vs Team B</p>
                </div>
            </div> 
            <div className="row">
                <div className="col-12 smalltext">
                   <p>NorthCoders Invitational</p>
                </div>
            </div>       
               
                
            
        </div>
    )   
  }
}

export default LiveGame;