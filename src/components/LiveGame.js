import React from 'react';
import './LiveGame.css';
import Iframe from 'react-iframe'
import {NavLink} from 'react-router-dom';


class LiveGame extends React.Component {
    constructor(props) {
        super(props)
    }
    
  render() {
      console.log(this);
    return (
        <div>
            <NavLink exact to="/game">       
            <div className="row video">
                <div className="col-12">
                    <img className='thumbnail' src={this.props.thumbnail}/>
                </div>
            </div> 
            <div className="row videotext">
                <div className="col-12 smalltext">
                    <p>{this.props.team_dire} vs {this.props.team_radiant}</p>
                </div>
            </div> 
            <div className="row">
                <div className="col-12 smalltext">
                {this.props.tournament_name}
                </div>
            </div>
            </NavLink>             
            
        </div>
    )   
  }
}

export default LiveGame;