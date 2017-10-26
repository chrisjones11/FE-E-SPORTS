import React from 'react';
import Cardform from './Cardform'
import './Betslip.css'



class Betslip extends React.Component {
    render () {
      return (
        <div>
          <div className="row">
            <div className="col-12 slipheading">
                <h1 className='sliptitle'>Betslip</h1>
            </div>
          </div>
          <div className="unplaced-bets row">
              
            <div className="col-12">
                     {/* MAP FUNCTION */}
                    <Cardform />
                 {/* END OF MAP FUNCTION */}
                <div className="row">
                    <div className="col-12">
                        <h2>TOTAL BET     £5.00</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <p>Remove All</p>
                    </div>
                    <div className="col-6">
                    <a className="btn btn-default btn-placebet" href="#">Place Bet</a>
                    </div>
                </div>
                <div className="row">
                    <h1>ACTIVE BETS</h1>
                </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Betslip;