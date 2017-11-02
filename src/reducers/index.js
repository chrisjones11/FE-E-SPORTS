import {combineReducers} from 'redux';

import game from './gameReducer';
import betslip from './betSlipReducer';
import home from './homeReducer';
import navbar from './navbarReducer'

const reducer = combineReducers({
  game, home, betslip,navbar
});
export default reducer;