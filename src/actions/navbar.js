import * as types from './types';
import axios from 'axios';
const API_URL = 'http://localhost:8080/api';

export const fetchAccountDataRequest = () => ({
    type: types.FETCH_ACCOUNT_DATA_REQUEST
});
export const fetchAccountDataSuccess = (data) => ({
    type: types.FETCH_ACCOUNT_DATA_SUCCESS,
    payload: data
});
export const fetchAccountDataFailure = (error) => ({
    type: types.FETCH_ACCOUNT_DATA_FAILURE,
    payload: error
});

// export default () => {
//   return dispatch => {
//     dispatch(fetchAccountDataRequest);
//     axios
//       .get(`${API_URL}/userdata`)
//       .then(res => {
//         dispatch(fetchAccountDataSuccess(res.data));
//       })
//       .catch(error => {
//         dispatch(fetchAccountDataFailure(error.message));
//       });
//   };
// };