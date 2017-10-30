import {combineReducers} from 'redux';

import game from './gameReducer';
//import betslip from './betSlipReducer';
import home from './homeReducer';

const reducer = combineReducers({
  game, home
});
export default reducer;