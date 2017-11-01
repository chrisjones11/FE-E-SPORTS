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
                <Iframe width='200' height='100' url='https://www.youtube.com/embed/g9up0_VSlC8' frameborder='0' gesture='media' allowfullscreen></Iframe>
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

const iframe = () =>{
    return {
      __html: this.props.thumbnail
    }
  }

export default LiveGame;