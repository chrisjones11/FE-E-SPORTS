import React from 'react';
import './Oddstable.css';
import {createBet} from '../actions/betslip';
import {connect} from 'react-redux';
import fetchResult from '../actions/result';
import fetchAccount from '../actions/navbar'

class Oddstable extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.resultHandler = this.resultHandler.bind(this)
      }
    handleClick (odds) {
        this.props.createBet(odds)
    }
    resultHandler () {
        this.props.fetchResult()
        this.props.fetchAccount();
    }
    render () {
        return (
            <div className='col-10 oddstable'>
                <div className='row'>
                    <div className='col-12' onClick={this.resultHandler}>
                        <h3>Latest Odds</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 oddstitle'>
                        <h3 className='textalign'>Results</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-5 marketdiv' onClick={this.handleClick.bind(null, this.props.winOrLossesStats[0])}>
                        <p className='textalign'>{this.props.winOrLossesStats[0].team_name} as {this.props.winOrLossesStats[0].side} to win</p>
                    </div>
                    <div className='col-1 odds' onClick={this.handleClick.bind(null, this.props.winOrLossesStats[0])}>
                        <p className='textalign'>{this.props.winOrLossesStats[0].toWin.fraction}</p>
                    </div>
                    <div className='col-5 marketdiv' onClick={this.handleClick.bind(null, this.props.winOrLossesStats[1])}>
                        <p className="textalign">{this.props.winOrLossesStats[1].team_name} as {this.props.winOrLossesStats[1].side} to win</p>
                    </div>
                    <div className='col-1 odds' onClick={this.handleClick.bind(null, this.props.winOrLossesStats[1])}>
                        <p className='textalign'>{this.props.winOrLossesStats[1].toWin.fraction}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 oddstitle'>
                        <h3 className='textalign'>Time to First Blood</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3 marketdiv' onClick={this.handleClick.bind(null, [this.props.firstBloodTimes[0], 'lessthan1min'])}>
                        <p className='textalign'>Less than 1:00</p>
                    </div>
                    <div className='col-1 odds' onClick={this.handleClick.bind(null, [this.props.firstBloodTimes[0], 'lessthan1min'])}>
                        <p className='textalign'>{this.props.firstBloodTimes[0].lessthan1min.fraction}</p>
                    </div>
                    <div className='col-3 marketdiv' onClick={this.handleClick.bind(null, [this.props.firstBloodTimes[0], 'between1and3min'])}>
                        <p className="textalign">Between 1:01 and 3:00</p>
                    </div>
                    <div className='col-1 odds' onClick={this.handleClick.bind(null, [this.props.firstBloodTimes[0], 'between1and3min'])}>
                        <p className='textalign'>{this.props.firstBloodTimes[0].between1and3min.fraction}</p>
                    </div>
                    <div className='col-3 marketdiv' onClick={this.handleClick.bind(null, [this.props.firstBloodTimes[0], 'between3and5min'])}>
                        <p className="textalign">Between 3:01 and 5:00</p>
                    </div>
                    <div className='col-1 odds' onClick={this.handleClick.bind(null, [this.props.firstBloodTimes[0], 'between3and5min'])}>
                        <p className='textalign'>{this.props.firstBloodTimes[0].between3and5min.fraction}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3 marketdiv' onClick={this.handleClick.bind(null, [this.props.firstBloodTimes[0], 'between5and10min'])}>
                        <p className='textalign'>Between 5:01 and 10:00</p>
                    </div>
                    <div className='col-1 odds' onClick={this.handleClick.bind(null, [this.props.firstBloodTimes[0], 'between5and10min'])}>
                        <p className='textalign'>{this.props.firstBloodTimes[0].between5and10min.fraction}</p>
                    </div>
                    <div className='col-3 marketdiv' onClick={this.handleClick.bind(null, [this.props.firstBloodTimes[0], 'over10min'])}>
                        <p className="textalign">Over 10:00</p>
                    </div>
                    <div className='col-1 odds' onClick={this.handleClick.bind(null, [this.props.firstBloodTimes[0], 'over10min'])}>
                        <p className='textalign'>{this.props.firstBloodTimes[0].over10min.fraction}</p>
                    </div>
                    <div className='col-4 marketdiv' onClick={this.handleClick}>
                        <p className="textalign"></p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 oddstitle'>
                        <h3 className='textalign'>Match Duration</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3 marketdiv' onClick={this.handleClick.bind(null, [this.props.durationStats[0], 'lessthan20min'])}>
                        <p className='textalign'>Less than 20:00</p>
                    </div>
                    <div className='col-1 odds' onClick={this.handleClick.bind(null, [this.props.durationStats[0], 'lessthan20min'])}>
                        <p className='textalign'>{this.props.durationStats[0].lessthan20min.fraction}</p>
                    </div>
                    <div className='col-3 marketdiv' onClick={this.handleClick.bind(null, [this.props.durationStats[0], 'between20and30min'])}>
                        <p className="textalign">Between 20:01 and 30:00</p>
                    </div>
                    <div className='col-1 odds' onClick={this.handleClick.bind(null, [this.props.durationStats[0], 'between20and30min'])}>
                        <p className='textalign'>{this.props.durationStats[0].between20and30min.fraction}</p>
                    </div>
                    <div className='col-3 marketdiv' onClick={this.handleClick.bind(null, [this.props.durationStats[0], 'between30and45min'])}>
                        <p className="textalign">Between 30:01 and 45:00</p>
                    </div>
                    <div className='col-1 odds' onClick={this.handleClick.bind(null, [this.props.durationStats[0], 'between30and45min'])}>
                        <p className='textalign'>{this.props.durationStats[0].between30and45min.fraction}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3 marketdiv' onClick={this.handleClick.bind(null, [this.props.durationStats[0], 'between45and55min'])}>
                        <p className='textalign'>Between 45:01 and 55:00</p>
                    </div>
                    <div className='col-1 odds' onClick={this.handleClick.bind(null, [this.props.durationStats[0], 'between45and55min'])}>
                        <p className='textalign'>{this.props.durationStats[0].between45and55min.fraction}</p>
                    </div>
                    <div className='col-3 marketdiv' onClick={this.handleClick.bind(null, [this.props.durationStats[0], 'over55min'])}>
                        <p className="textalign">Over 55:00</p>
                    </div>
                    <div className='col-1 odds' onClick={this.handleClick.bind(null, [this.props.durationStats[0], 'over55min'])}>
                        <p className='textalign'>{this.props.durationStats[0].over55min.fraction}</p>
                    </div>
                    <div className='col-4 marketdiv'>
                        <p className="textalign"></p>
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    data: state.game.data,
    loading: state.game.loading,
    error: state.game.error
  });


const mapDispatchToProps = dispatch => ({
    createBet: (odds) => {
      dispatch(createBet(odds));
    },
    fetchResult: () => {
        dispatch(fetchResult());
    },
    fetchAccount: () => {
        dispatch(fetchAccount());
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(Oddstable);