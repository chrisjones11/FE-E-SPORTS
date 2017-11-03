import * as types from "./types";
import axios from "axios";
const API_URL = "http://localhost:8080/api";

export const fetchResultDataRequest = () => ({
  type: types.FETCH_RESULT_DATA_REQUEST
});
export const fetchResultDataSuccess = data => ({
  type: types.FETCH_RESULT_DATA_SUCCESS,
  payload: data
});
export const fetchResultDataFailure = error => ({
  type: types.FETCH_RESULT_DATA_FAILURE,
  payload: error
});



export default () => {
  return dispatch => {
    dispatch(fetchResultDataRequest);
    axios
      .get(`${API_URL}/results/1`)
      .then(res => {
        dispatch(fetchResultDataSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchResultDataFailure(error.message));
      });
  };
};