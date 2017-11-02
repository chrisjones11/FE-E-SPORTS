import * as types from '../actions/types';

export const getInitialState = () => ({
    loading: false,
    data: {
        "durationStats": [
          {
            "match_id": 3516590405,
            "bet_type": "duration",
            "_id": "59f34a5e14ee724abf414cdf",
            "__v": 0,
            "over55min": {
              "fraction": "8/1",
              "odd": 8,
              "low" : 3300, 
              "high" : 10000000 
 },
            "between45and55min": {
              "fraction": "4/1",
              "odd": 4,
              "low" : 2700, 
              "high" : 3299 

            },
            "between30and45min": {
              "fraction": "2/1",
              "odd": 2,
              "low" : 1800, 
              "high" : 2699 
            },
            "between20and30min": {
              "fraction": "4/1",
              "odd": 4,
              "low" : 1200, 
              "high" : 1799 
            },
            "lessthan20min": {
              "fraction": "10/1",
              "odd": 10,
              "low" : 1200, 
              "high" : 1799
            }
          }
        ],     

        "firstBloodTimes": [
          {
            "match_id": 3516590405,
            "bet_type": "first_blood",
            "_id": "59f34a5e14ee724abf414cde",
            "__v": 0,
            "over10min": {
              "fraction": "10/1",
              "odd": 10,
              "low" : 599, 
              "high" : 100000 
            },
            "between5and10min": {
              "fraction": "4/1",
              "odd": 4,
              "low" : 300, 
              "high" : 599
            },
            "between3and5min": {
              "fraction": "2/1",
              "odd": 2,
              "low" : 180, 
              "high" : 299 

            },
            "between1and3min": {
              "fraction": "4/1",
              "odd": 4,
              "low" : 60, 
              "high" : 179
            },
            "lessthan1min": {
              "fraction": "5/1",
              "odd": 5,
              "low" : 0, 
              "high" : 59
            }
          }
        ],
   
        "winOrLossesStats": [
          {
            "match_id": 3516590405,
            "team_name": "EG",
            "side": "radiant",
            "_id": "59f34a5e14ee724abf414ce0",
            "__v": 0,
            "toLose": {
              "fraction": "2/1",
              "odd": 2
            },
            "toWin": {
              "fraction": "2/1",
              "odd": 2
            }
          },
          {
            "match_id": 3516590405,
            "team_name": "LGD",
            "side": "dire",
            "_id": "59f34a5e14ee724abf414ce1",
            "__v": 0,
            "toLose": {
              "fraction": "2/1",
              "odd": 2
            },
            "toWin": {
              "fraction": "2/1",
              "odd": 2
            }
          }
        ],
        "pregamesStats": [
          {
            "team_name": "LGD-GAMING",
            "total_wins": 801,
            "total_losses": 558,
            "team_rating": "1380.6",
            "team_id": 15,
            "_id": "59f34a5e14ee724abf414cea",
            "__v": 0
          },
          {
            "team_name": "Evil Geniuses",
            "total_wins": 751,
            "total_losses": 469,
            "team_rating": "1308.22",
            "team_id": 39,
            "_id": "59f34a5e14ee724abf414ceb",
            "__v": 0
          }
        ]
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