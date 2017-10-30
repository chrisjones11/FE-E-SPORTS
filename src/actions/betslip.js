import * as types from './types';
import axios from 'axios';
const API_URL = 'http://localhost:8080/api';

export const fetchBetslipDataRequest = () => ({
    type: types.FETCH_BETSLIP_DATA_REQUEST
});
export const fetchBetslipDataSuccess = (data) => ({
    type: types.FETCH_BETSLIP_DATA_SUCCESS,
    payload: data
});
export const fetchBetslipDataFailure = (error) => ({
    type: types.FETCH_BETSLIP_DATA_FAILURE,
    payload: error
});



// export const insertStake = (stake) => ({
//     type: types.INSERT_STAKE,
//     payload: stake
// });

// export const returnPayment = () => ({
//     type: types.RETURN_PAYMENT,
    
// });

export default () => {
  return (dispatch) => {
      dispatch(fetchBetslipDataRequest);
          axios.get(`${API_URL}/betslip`)
      .then ((res) => {
          dispatch(fetchBetslipDataSuccess(res.data));
          console.log(res.data)
      })
      .catch((error) => {
          dispatch(fetchBetslipDataFailure(error.message));
      })
  }
}