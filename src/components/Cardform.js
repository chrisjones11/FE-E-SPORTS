import React from "react";

class Cardform extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const val = event.target.value;
    const id = this.props.BetId;
    this.props.changeReturn(val, id);
  
  }

  handleRemoveClick(event){
  console.log(event);
  this.props.removeBetHandler(event);

  }

  render() {
    console.log(this.props.stake);
    return (
      <div>
        <div className="row unplaced-bet">
          <div className="col-3 crossbtndiv">
            <img
              className="crossbtn"  onClick = {this.handleRemoveClick.bind(null,this.props.BetId)}
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
                <form>
                  <input
                    onChange={this.handleChange}
                    type="text"
                    value={this.props.stake}
                    className="stake"
                    placeholder="stake"
                  />
                </form>
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

export default Cardform;
