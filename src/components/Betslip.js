import React from 'react';
import Cardform from './Cardform'
import './Betslip.css'
import {connect} from 'react-redux';
import {insertStake} from '../actions/betslip';
import {removeAll} from '../actions/betslip';


class Betslip extends React.Component {
    constructor(props){
        super(props);
        this.changeReturn = this.changeReturn.bind(this);
        this.removeAllHander = this.removeAllHandler.bind(this);
    }
    changeReturn(val, id){
     this.props.insertStake(val, id);
        }

    removeAllHandler(){
     this.props.removeAll();
        }

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
                            <Cardform BetId = {item.BetId} teamName = {item.TeamName}
                            bettingMarket = {item.BettingMarket} tournamentName ={item.TournamentName}
                            odds = {item.Odds} stake = {item.Stake} changeReturn ={this.changeReturn}/>
                            {/* <Cardform   />
                            <Cardform /> */}
                            {/* END OF MAP FUNCTION */}
                        </div>
                    </div>
              )}
              )}
                  <div className="row">
                        <div className="col-12 totalbetdiv">
                            <p>TOTAL BET  {this.props.totalBet}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 removealldiv">
                            <a className="btn btn-default btn-work removeall" href="#" onClick={this.removeAllHander}>Remove All</a>
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
    totalBet:state.betslip.totalBet,
    activeBets:state.betslip.data.activeBets,
    loading:state.betslip.loading,
    error:state.betslip.error
  });
  
  const mapDispatchToProps = dispatch => ({
    insertStake: (stake,id) => {
      dispatch(insertStake(stake,id));
    },
    removeAll: () => {
        dispatch(removeAll());
      }
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Betslip);