import React from "react";
import Cardform from "./Cardform";
import "./Betslip.css";
import { connect } from "react-redux";
import { insertStake } from "../actions/betslip";
import { placeBets } from "../actions/postBets";
import postBets from "../actions/postBets";
import {updateBalance} from '../actions/navbar';
import { removeAll } from "../actions/betslip";
import fetchBetslipData from "../actions/betslip";
import {removeBet} from '../actions/betslip';




class Betslip extends React.Component {
  constructor(props) {
    super(props);
    this.changeReturn = this.changeReturn.bind(this);
    this.handlePlacedBets = this.handlePlacedBets.bind(this);
    this.removeAllHander = this.removeAllHandler.bind(this);
    this.removeBetHandler = this.removeBetHandler.bind(this);
   

  }
  changeReturn(val, id) {
    this.props.insertStake(val, id);
  }

  handlePlacedBets() {
    if (this.props.totalBet <= 0){
      alert("ERROR: PLEASE ENTER AN AMOUT IN STAKE");
      return;
    }
    if (this.props.account.balance < this.props.totalBet) {
      alert("ERROR: INSUFFICENT FUNDS");
      return;
    }
    const bets = this.props.toBePlaced;
    const subtract = this.props.totalBet;
    this.props.updateBalance(subtract);
    this.props.placeBets(bets);
    this.props.postBets(bets);
    
  }

  removeAllHandler() {
    this.props.removeAll();
  }

  componentDidMount() {
    this.props.fetchBetslipData();

  }

  removeBetHandler(BetId) {
    this.props.removeBet(BetId)
  }
 
  render() {
    console.log(this.props)
    return (
      <div className="betslip-outer col-3">
        <div className="betslip row">
          <div className="col-12 betmain">
            <div className="row">
              <div className="col-12 slipheading">
                <h1 className="sliptitle">Betslip</h1>
              </div>
            </div>
            {this.props.toBePlaced.map(item => {
              return (
                <div className="unplaced-bets row">
                  <div className="col-12 ">
                    <Cardform
                      BetId={item.BetId}
                      teamName={item.TeamName}
                      bettingMarket={item.BettingMarket}
                      tournamentName={item.TournamentName}
                      odds={item.Odds}
                      fraction={item.fraction}
                      stake={item.Stake}
                      changeReturn={this.changeReturn}
                      loss={item.loss}
                      win={item.win}

                      removeBetHandler = {this.removeBetHandler} 

                    />
                  </div>
                </div>
              );
            })}
            <div className="row">
              <div className="col-8 totalbetdiv">
                <p>TOTAL BET {this.props.totalBet}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6 removealldiv">
                <a
                  className="btn btn-default btn-work removeall"
                  href="#"
                  onClick={this.removeAllHander}
                >
                  {" "}
                  Remove All{" "}
                </a>
              </div>
              <div className="col-6">
                <a
                  className="btn btn-default btn-placebets"
                  href="#"
                  onClick={this.handlePlacedBets}
                >
                  Place Bet
                </a>
              </div>
            </div>
            <div className="row activebetdiv ">
              <p className="activebet">ACTIVE BETS</p>
            </div>

            {this.props.activeBets.map(item => {
              return (
                <div className="unplaced-bets row">
                  <div className="col-12 ">
                    <Cardform
                      BetId={item.BetId}
                      teamName={item.TeamName}
                      bettingMarket={item.BettingMarket}
                      tournamentName={item.TournamentName}
                      odds={item.Odds}
                      fraction={item.fraction}
                      stake={item.Stake}
                      changeReturn={this.changeReturn}
                      loss={item.loss}
                      win={item.win}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  toBePlaced: state.betslip.toBePlaced,
  totalBet: state.betslip.totalBet,
  activeBets: state.betslip.activeBets,
  loading: state.betslip.loading,
  error: state.betslip.error,
  account: state.navbar.data,
});

const mapDispatchToProps = dispatch => ({
  insertStake: (stake, id) => {
    dispatch(insertStake(stake, id));
  },
  placeBets: bets => {
    dispatch(placeBets(bets));
  },
  postBets: bets => {
    dispatch(postBets(bets));
  },
  removeAll: () => {
    dispatch(removeAll());
  },

  fetchBetslipData: () => {
    dispatch(fetchBetslipData());
  },
  removeBet: (id) => {
    dispatch(removeBet(id));
},
  updateBalance: (data) => {
    dispatch(updateBalance(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Betslip);
