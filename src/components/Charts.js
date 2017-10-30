import React from 'react';

class Charts extends React.Component {
    render () {
        return (
            <div>
                <div className='row'>
                    <div className="col-12">
                        <h3>Form</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-6">
                        <h3>Team 1</h3>
                    </div>
                    <div className="col-6">
                        <h3>Team 2</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-6">
                        <h3>Chart 1</h3>
                    </div>
                    <div className="col-6">
                        <h3>Chart 2</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Charts;