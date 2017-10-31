import React from "react";
import Cardform from "./Cardform";
import "./Betslip.css";
import { connect } from "react-redux";
import { insertStake } from "../actions/betslip";
import { placeBets } from "../actions/postBets";
import postBets from "../actions/postBets";

class Betslip extends React.Component {
  constructor(props) {
    super(props);
    this.changeReturn = this.changeReturn.bind(this);
    this.handlePlacedBets = this.handlePlacedBets.bind(this);
  }
  changeReturn(val, id) {
    this.props.insertStake(val, id);
  }

  handlePlacedBets() {
    const bets = this.props.toBePlaced;
    this.props.placeBets(bets);
    this.props.postBets(bets);
  }

  render() {
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
                    />
                  </div>
                </div>
              );
            })};
            <div className="row">
              <div className="col-12 totalbetdiv">
                <p>TOTAL BET £5.00</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6 removealldiv">
                <a className="btn btn-default btn-work removeall" href="#">
                  Remove All
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
            })};
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  toBePlaced: state.betslip.toBePlaced,
  activeBets: state.betslip.data.activeBets,
  loading: state.betslip.loading,
  error: state.betslip.error
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Betslip);
