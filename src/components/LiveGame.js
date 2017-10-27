import React from 'react';
import './LiveGame.css';


class LiveGame extends React.Component {
    constructor(props) {
        super(props)
    }
    
  render() {
      console.log(this);
    return (
        <div>       
            <div className="row">
                <div className="col-12">
                <img className="livethumbnail" src=""/>
                </div>
            </div> 
            <div className="row">
                <div className="col-12 smalltext">
                    <p>{this.props.team_dire} vs {this.props.team_radiant}</p>
                </div>
            </div> 
            <div className="row">
                <div className="col-12 smalltext">
                {this.props.tournament_name}
                </div>
            </div>       
               
                
            
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