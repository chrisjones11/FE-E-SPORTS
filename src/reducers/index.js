import {combineReducers} from 'redux';

import game from './gameReducer';
// import betslip from './betslipReducer';
import home from './homeReducer';

const reducer = combineReducers({
  game, home
});
export default reducer;