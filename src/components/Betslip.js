import React from 'react';
import Cardform from './Cardform'
import './Betslip.css'
import {connect} from 'react-redux';
import betslip from '../actions/betslip'


class Betslip extends React.Component {
    render () {
      return (
          
        <div className="betslip-outer col-3">
            <div className='betslip row'>
                <div className="col-12 betmain">
                    <div className="row">
                        <div className="col-12 slipheading">
                            <h1 className='sliptitle'>Betslip</h1>
                        </div>
                    </div>
                    {this.props.toBePlaced.map((item) => {
              return (
                    <div className="unplaced-bets row">
                        <div className="col-12 ">
                            {/* MAP FUNCTION */}
                            <Cardform betId = {item.BetId} teamName = {item.TeamName}
                            bettingMarket = {item.BettingMarket} tournamentName ={item.TournamentName}
                            odds = {item.Odds} />
                            {/* <Cardform   />
                            <Cardform /> */}
                            {/* END OF MAP FUNCTION */}
                        </div>
                    </div>
              )}
              )};
                  <div className="row">
                        <div className="col-12 totalbetdiv">
                            <p>TOTAL BET     £5.00</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 removealldiv">
                            <a className="btn btn-default btn-work removeall" href="#">Remove All</a>
                        </div>
                        <div className="col-6">
                            <a className="btn btn-default btn-placebet" href="#">Place Bet</a>
                        </div>
                    </div>
                    <div className="row activebetdiv ">
                        <p className='activebet'>ACTIVE BETS</p>
                    </div>
                </div>
            </div>
            </div>  
      );
    }
  }

  
  const mapStateToProps = state => ({
    toBePlaced:state.betslip.toBePlaced,
    activeBets:state.betslip.data.activeBets,
    loading:state.betslip.loading,
    error:state.betslip.error
  });
  
//   const mapDispatchToProps = dispatch => ({
//     fetchBetslip: () => {
//       dispatch(fetchBetslip());
//     }
//   })
  
  export default connect(mapStateToProps)(Betslip);