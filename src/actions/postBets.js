import axios from 'axios';
const API_URL = 'http://localhost:8080/api';

export const postBetslipDataRequest = () => ({
    type: types.P0ST_BETSLIP_DATA_REQUEST
});
export const postBetslipDataSuccess = (data) => ({
    type: types.P0ST_BETSLIP_DATA_SUCCESS,
    payload: data
});
export const postBetslipDataFailure = (error) => ({
    type: types.P0ST_BETSLIP_DATA_FAILURE,
    payload: error
});

export default () => {
    return (dispatch) => {
        dispatch(postBetslipDataRequest);
            axios.post(`${API_URL}/betslip`)
        .then ((res) => {
            dispatch(postBetslipDataSuccess(res.data));
            console.log(res.data)
        })
        .catch((error) => {
            dispatch(postBetslipDataFailure(error.message));
        })
    }
  }