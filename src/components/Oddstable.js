import React from 'react';
import './Oddstable.css';

class Oddstable extends React.Component {
    render () {
        return (
            <div className='col-10 oddstable'>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Latest Odds</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 oddstitle'>
                        <h3 className='textalign'>Results</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-5 marketdiv'>
                        <p className='textalign'>Team A to win</p>
                    </div>
                    <div className='col-1 odds'>
                        <p className='textalign'>3/1</p>
                    </div>
                    <div className='col-5 marketdiv'>
                        <p className="textalign">Team B to win</p>
                    </div>
                    <div className='col-1 odds'>
                        <p className='textalign'>2/1</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 oddstitle'>
                        <h3 className='textalign'>Time to First Blood</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3 marketdiv'>
                        <p className='textalign'>Less than 1:00</p>
                    </div>
                    <div className='col-1 odds'>
                        <p className='textalign'>3/1</p>
                    </div>
                    <div className='col-3 marketdiv'>
                        <p className="textalign">Between 1:01 and 1:30</p>
                    </div>
                    <div className='col-1 odds'>
                        <p className='textalign'>7/2</p>
                    </div>
                    <div className='col-3 marketdiv'>
                        <p className="textalign">Between 1:31 and 3:00</p>
                    </div>
                    <div className='col-1 odds'>
                        <p className='textalign'>5/1</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3 marketdiv'>
                        <p className='textalign'>Between 3:01 and 5:00</p>
                    </div>
                    <div className='col-1 odds'>
                        <p className='textalign'>8/1</p>
                    </div>
                    <div className='col-3 marketdiv'>
                        <p className="textalign">Between 5:01 and 10:00</p>
                    </div>
                    <div className='col-1 odds'>
                        <p className='textalign'>15/1</p>
                    </div>
                    <div className='col-3 marketdiv'>
                        <p className="textalign">Greater than 10:00</p>
                    </div>
                    <div className='col-1 odds'>
                        <p className='textalign'>30/1</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 oddstitle'>
                        <h3 className='textalign'>Match Duration</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3 marketdiv'>
                        <p className='textalign'>Less than 1:00</p>
                    </div>
                    <div className='col-1 odds'>
                        <p className='textalign'>3/1</p>
                    </div>
                    <div className='col-3 marketdiv'>
                        <p className="textalign">Between 1:01 and 1:30</p>
                    </div>
                    <div className='col-1 odds'>
                        <p className='textalign'>7/2</p>
                    </div>
                    <div className='col-3 marketdiv'>
                        <p className="textalign">Between 1:31 and 3:00</p>
                    </div>
                    <div className='col-1 odds'>
                        <p className='textalign'>5/1</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3 marketdiv'>
                        <p className='textalign'>Between 3:01 and 5:00</p>
                    </div>
                    <div className='col-1 odds'>
                        <p className='textalign'>8/1</p>
                    </div>
                    <div className='col-3 marketdiv'>
                        <p className="textalign">Between 5:01 and 10:00</p>
                    </div>
                    <div className='col-1 odds'>
                        <p className='textalign'>15/1</p>
                    </div>
                    <div className='col-3 marketdiv'>
                        <p className="textalign">Greater than 10:00</p>
                    </div>
                    <div className='col-1 odds'>
                        <p className='textalign'>30/1</p>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Oddstable;