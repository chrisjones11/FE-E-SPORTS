import * as types from './types';
import axios from 'axios';
const API_URL = 'http://localhost:8080/api';

export const fetchGameDataRequest = () => ({
    type: types.FETCH_GAME_DATA_REQUEST
});
export const fetchGameDataSuccess = (data) => ({
    type: types.FETCH_GAME_DATA_SUCCESS,
    payload: data
});
export const fetchGameDataFailure = (error) => ({
    type: types.FETCH_GAME_DATA_FAILURE,
    payload: error
});

export default () => {
    return (dispatch) => {
        dispatch(fetchGameDataRequest);
        axios.get(`${API_URL}/match/1`)
        .then ((res) => {
            dispatch(fetchGameDataSuccess(res.data));
            console.log(res.data)
        })
        .catch((error) => {
            dispatch(fetchGameDataFailure(error.message));
        })
    }
}