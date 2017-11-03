import React from 'react';
import Oddstable from './Oddstable'
import Charts from './Charts'
import fetchGame from '../actions/game';
import {connect} from 'react-redux';
import "./Game.css"


class Game extends React.Component {

    componentDidMount() {
    this.props.fetchGame();
  }

  render() {
    return (
      <div className="newsgame col-9">
      <div className="title">
        <div className="row " >
          <div className="col-sm-12">
            <h1>EG as Radiant v/s LGD as Dire - NorthCoders Invitational </h1>
            <p>Go for a Bet!!!</p>
          </div>
        </div>
        {/* GET THE IFRAME VIDEO EMBEDS WORKING */}
        <div className="row gametitleimgcontainer">
          <div className="col-sm-12">
            <img className="gametitleimg" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508778140/titlepage_image_lbtxjf.png'/>
          </div>
        </div>
        <div className="row">
          < div className="col-sm-12">
         
          <Oddstable winOrLossesStats = {this.props.data.winOrLossesStats} durationStats = {this.props.data.durationStats} firstBloodTimes = {this.props.data.firstBloodTimes} createBet = {this.createBet}/>
          <Charts />
        </div>
        </div>
        </div>
        </div>
       
      
      );
  }
  createBet (odd) {
    console.log('createBet called')
    if (Array.isArray(odd)) {console.log('either first blood or match duration')}
    else if (typeof odd === 'object') {console.log('bet on winner')}
  }
}

const mapStateToProps = state => ({
  data: state.game.data,
  loading: state.game.loading,
  error: state.game.error
});

const mapDispatchToProps = dispatch => ({
  fetchGame: () => {
    dispatch(fetchGame());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Game);