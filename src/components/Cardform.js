import React from 'react';

class Cardform extends React.Component {
    constructor(props){
        super(props);
this.state ={
    number :''
}
        }
    
  render () {
    return (
      <div>
        <div className="row unplaced-bet">
        <div className="col-3">
            <p>remove bet</p>
        </div>
        <div className="col-6">
            <div className="row">
                <div className="col-12">
                    <p>Team/Person Name</p>
                </div>
            </div>
        <div className="row">
            <div className="col-12">
                <p>Betting Market</p>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <p>Tournament/Comp Name</p>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <form>
                 <input type="number" className="stake" placeholder="stake" ></input>
                </form>   
            </div>
            <div className="col-6">
                <p>Return</p>
            </div>
        </div>
    </div>
    <div className="col-3">
        <p>ODDS</p>
    </div>
    </div>
      </div>
    );
  }
}

export default Cardform;