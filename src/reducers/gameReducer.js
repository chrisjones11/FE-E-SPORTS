import * as types from '../actions/types';

export const getInitialState = () => ({
    loading: false,
    data: {
        "durationStats": [
          {
            "match_id": 0,
            "bet_type": "",
            "_id": "",
            "__v": 0,
            "over55min": {
              "fraction": "",
              "odd":0,
              "low" : 0, 
              "high" : 0 
            },
            "between45and55min": {
              "fraction": "",
              "odd":0,
              "low" : 0, 
              "high" : 0 

            },
            "between30and45min": {
              "fraction": "",
              "odd": 0,
              "low" :0, 
              "high" : 0 
            },
            "between20and30min": {
              "fraction": "",
              "odd": 0,
              "low" : 0, 
              "high" : 0 
            },
            "lessthan20min": {
              "fraction": "",
              "odd": 0,
              "low" : 0, 
              "high" : 0
            }
          }
        ],     

        "firstBloodTimes": [
          {
            "match_id": 0,
            "bet_type": "",
            "_id": "",
            "__v": 0,
            "over10min": {
              "fraction": "",
              "odd": 0,
              "low" : 0, 
              "high" : 0 
            },
            "between5and10min": {
              "fraction": "",
              "odd":0,
              "low" : 0, 
              "high" : 0
            },
            "between3and5min": {
              "fraction": "",
              "odd":0,
              "low" : 0, 
              "high" : 0 

            },
            "between1and3min": {
              "fraction": "",
              "odd": 0,
              "low" : 0, 
              "high" : 0
            },
            "lessthan1min": {
              "fraction": "",
              "odd": 0,
              "low" : 0, 
              "high" : 0
            }
          }
        ],
   
        "winOrLossesStats": [
          {
            "match_id": 0,
            "team_name": "",
            "side": "",
            "_id": "",
            "__v": 0,
            "toLose": {
              "fraction": "",
              "odd": 0
            },
            "toWin": {
              "fraction": "",
              "odd": 0
            }
          },
          {
            "match_id": 0,
            "team_name": "",
            "side": "",
            "_id": "",
            "__v": 0,
            "toLose": {
              "fraction": "",
              "odd": 0
            },
            "toWin": {
              "fraction": "",
              "odd": 0
            }
          }
        ],
        "pregamesStats": [ {
          "team_name": "",
          "total_wins": 0,
          "total_losses": 0,
          "team_rating": "",
          "team_id": 0,
          "_id": "",
          "__v": 0
        },
        {
          "team_name": " ",
          "total_wins": 0,
          "total_losses": 0,
          "team_rating": "",
          "team_id": 0,
          "_id": "",
          "__v": 0
        }]
      },
    error: null
});

export default (prevState = getInitialState(), action) => {
    switch (action.type) {
        case types.FETCH_GAME_DATA_REQUEST:
            return Object.assign({}, prevState, {
                loading: true,
                data: [],
                error: null
            });
        case types.FETCH_GAME_DATA_SUCCESS:
            return Object.assign({}, prevState, {
                loading: false,
                data: action.payload,
                error: null
        });
        case types.FETCH_GAME_DATA_FAILURE:
            return Object.assign({}, prevState, {
                loading: false,
                data: [],
                error: action.payload
        });
        default: 
         return prevState;
    }
}