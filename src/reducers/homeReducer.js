import * as types from '../actions/types';

export const getInitialState = () => ({
    loading: false,
    data: {
        newsStories: [],
        games: [],
        upcomingTourneys: []
      },
    error: null
});

export default (prevState = getInitialState(), action) => {
    switch (action.type) {
        // case types.GET_HOME_DATA_REQUEST:
        //     return Object.assign({}, prevState, {
        //         loading: true,
        //         data: [],
        //         error: null
        //     });
        // case types.GET_HOME_DATA_SUCCESS:
        //     return Object.assign({}, prevState, {
        //         loading: false,
        //         data: action.payload,
        //         error: null
        // });
        // case types.GET_HOME_DATA_FAILURE:
        //     return Object.assign({}, prevState, {
        //         loading: false,
        //         data: [],
        //         error: error
        // });
        case types.GET_NEWS_STORIES:
            return Object.assign({}, prevState, {
                data: action.payload
            });
        default: 
         return prevState;
    }
}