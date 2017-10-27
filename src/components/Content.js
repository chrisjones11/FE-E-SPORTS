import React from 'react';
import Betslip from './Betslip'
import Game from './Game';
import Home from './Home';

import {Route, Switch} from 'react-router-dom';

class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        console.log(this);
        return (
            <div className="content row">            
                <Switch>
                    <Route path={this.props.match.patch} component={Home}>
              </Route>
            </Switch>
                {/* <Game /> */}
               
            </div>
        )
    }
}

export default Content;