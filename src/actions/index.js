import * as types from './types';
import axios from 'axios';
const API_URL = 'localhost:3001/api/';

export const fetchHomeDataRequest = () => ({
    type: types.FETCH_HOME_DATA_REQUEST
});
export const fetchHomeDataSuccess = (data) => ({
    type: types.FETCH_HOME_DATA_SUCCESS,
    payload: data
});
export const fetchHomeDataFailure = (error) => ({
    type: types.FETCH_HOME_DATA_FAILURE,
    payload: error
});

export default () => {
    return (dispatch) => {
        dispatch(fetchHomeDataRequest);
        return axios.get(`${API_URL}/`)
        .then ((res) => {
            dispatch(fetchHomeDataSuccess(res.data));
            console.log(res.data)
        })
        .catch((error) => {
            dispatch(fetchHomeDataFailure(error.message));
        })
    }
}


//actions
// export const addBet = (data) => ({
//     type: types.ADD_BET,
//     payload: {
//       matchId: data.matchId,
//       teamId: data.teamId,
//       market: data.market,
//       comp: data.comp,
//       odds: data.odds
//     }
// });

// export const FETCHStake = (data) => ({
//     type: types.FETCH_STAKE,
//     payload: data
// });

// export const FETCHReturn = (data) => ({
//     type: types.FETCH_RETURN,
//     payload: {
//         stake: data.stake,
//         odds: data.odds
//     } 
// });

// export const removeBet = (data) => ({
//     type: types.REMOVE_BET,
//     payload: {
//         betId: data
//     }
// });

// export const removeAll = (data) => ({
//     type: types.REMOVE_All,
//     payload: {
//         betIds: []
//     }
// });

// export const FETCHTotal = (data) => ({
//     type: types.FETCH_TOTAL,
//     payload: {
//         Stakes: []
//     }
// });

// export const placeBet = (data) => ({
//     type: types.PLACE_BET,
//     payload: {
//         betIds: [],
//         total: data.total
//     }
// });

// export const FETCHGame = (data) => ({
//     type: types.FETCH_GAME,
//     payload: {
//         teamNames: data.teamNames,
//         matchId: data.matchId,

//     }
// });

// export const FETCHMatchDetailsRequest = () => ({
//     type: types.FETCH_MATCH_DETAILS
// });

// export const FETCHMatchDetailsSuccess = (matchId) => ({
//     type: types.FETCH_MATCH_DETAILS,
//     payload: matchId
// });

// export const FETCHMatchDetailsFailure = (matchId) => ({
//     type: types.FETCH_MATCH_DETAILS,
//     payload: error
// });

// export const FETCHUpcoming = (data) => ({
//     type: types.FETCH_UPCOMING,
//     payload: []
// });

// export const FETCHNewsStories = (data) => ({
//     type: types.FETCH_NEWS_STORIES,
//     payload: data
// });

// export const returnMoney = (data) => ({
//     type: types.RETURN_MONEY,
//     payload: {}
// });
