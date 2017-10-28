import * as types from '../actions/types';

export const getInitialState = () => ({
    loading: false,
    data: {
      "newsStories": [],
      "games": [],
      "upcomingTourneys": []
    },

  
    error: null
});

export default (prevState = getInitialState(), action) => {
  switch (action.type) {
      case types.FETCH_HOME_DATA_REQUEST:
        return Object.assign({}, prevState, {
            loading: true,
            data: [],
            error: null
        });
      case types.FETCH_HOME_DATA_SUCCESS:
        return Object.assign({}, prevState, {
            loading: false,
            data: action.payload,
            error: null
        });
      case types.FETCH_HOME_DATA_FAILURE:
        return Object.assign({}, prevState, {
            loading: false,
            data: [],
            error: action.payload
        });
      default: 
       return prevState;
  }
}