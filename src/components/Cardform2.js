
import React from "react";

class Cardform2 extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleChange(event) {
    event.preventDefault();
    const val = event.target.value;
    const id = this.props.BetId;
    this.props.changeReturn(val, id);
  }
  handleClick(data){
    this.props.removeBetHandler(data)
  }
  render() {
   
    return (
      <div>
        <div className="row unplaced-bet">
          <div   className="col-3 crossbtndiv" onClick={this.handleClick.bind(null, this.props.BetId)}> 
            <img
              className="crossbtn"
              src="http://res.cloudinary.com/diohwb5lp/image/upload/v1508943403/remove_blk_ss7nxx.png"
            />
          </div>
          <div className="col-6 cardformdiv">
            <div className="row">
              <div className="col-12">
                <p>Team/Person Name:{this.props.teamName}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p>Betting Market:{this.props.bettingMarket}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p>Tournament/Comp Name:{this.props.tournamentName}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6 formdiv">
              <p>
              Win: {this.props.win}
            </p>
              </div>
              <div className="col-6 returndiv">
                <p className="return"> Return: {this.props.stake * this.props.odds} </p>
               
              </div>
            </div>
          </div>
          <div className="col-3 oddsdiv">
            <p>ODDS:{this.props.odds}</p>
            <p>{this.props.fraction}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cardform2;
