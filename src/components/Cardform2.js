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
          <div   className="col-3 returncrossbtndiv" onClick={this.handleClick.bind(null, this.props.BetId)}> 
          </div>
          <div className="col-9 cardformdiv">
            <div className='row'>
            <div className="col-12 ">
            <div className="row">
              <div className="col-6">
                <p>Team:{this.props.teamName}</p>
              </div>
              <div className="col-6 oddsdiv">
                {this.props.fraction}
             </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p>{this.props.bettingMarket}</p>
              </div>
            </div>
            
          </div>
            </div>
            <div className="row match-id">
              <div className="col-12">
                <p>Match id: {this.props.tournamentName}</p>
              </div>
            </div>
          </div>
          
          
        </div>
       
        <div className="row">
              <div className="col-6 formdiv">
              <p>
              Win: {this.props.win}
            </p>
              </div>
              <div className="col-6 returndiv">
                <div className='row'>
                 
                   <div className="col-6 return"> Return: </div><div className=' col-6 returnval'>£{this.props.stake * this.props.odds} </div>
                </div>
              </div>
            </div>
      </div>
    );
  }
}

export default Cardform2;
