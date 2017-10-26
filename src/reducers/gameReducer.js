import * as types from '../actions/types';

export const getInitialState = () => ({
    loading: false,
    data: [],
    error: null
});

export default (prevState = getInitialState(), action) => {
    switch (action.type) {
        // case types.GET_MATCH_DETAILS_REQUEST:
        //     return Object.assign({}, prevState, {
        //         loading: true,
        //         data: [],
        //         error: null
        //     });
        // case types.GET_MATCH_DETAILS_SUCCESS:
        //     return Object.assign({}, prevState, {
        //         loading: false,
        //         data: action.payload,
        //         error: null
        // });
        // case types.GET_MATCH_DETAILS_FAILURE:
        //     return Object.assign({}, prevState, {
        //         loading: false,
        //         data: [],
        //         error: error
        // });
        default: 
         return prevState;
    }
}