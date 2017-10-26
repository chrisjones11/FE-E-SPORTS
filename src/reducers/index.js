import {combineReducers} from 'redux';

import game from './gameReducer';
import betslip from './betslipReducer';
import home from './homeReducer';

const reducer = combineReducers({
  game, betslip, home
});
export default reducer;