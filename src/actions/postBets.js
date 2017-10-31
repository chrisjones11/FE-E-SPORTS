import * as types from "./types";
import axios from "axios";
const API_URL = "http://localhost:8080/api";

export const postBetslipDataRequest = () => ({
  type: types.POST_BETSLIP_DATA_REQUEST
});
export const postBetslipDataSuccess = data => ({
  type: types.POST_BETSLIP_DATA_SUCCESS,
  payload: data
});
export const postBetslipDataFailure = error => ({
  type: types.POST_BETSLIP_DATA_FAILURE,
  payload: error
});
export const placeBets = bet => ({
  type: types.PLACE_BETS,
  payload: bet
});

export default () => {
  return dispatch => {
    dispatch(postBetslipDataRequest());
    axios
      .post(`${API_URL}/placedBets`)
      .then(res => {
        dispatch(postBetslipDataSuccess(res.data));
        console.log(res.data);
      })
      .catch(error => {
        dispatch(postBetslipDataFailure(error.message));
      });
  };
};
