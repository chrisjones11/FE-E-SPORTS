import * as types from "../actions/types";


export const getInitialState = () => ({
  login: false,
  loading: false,
  data:{ id:1,
    name:'Arpitha Patil',
    balance: 10
  },
  error:null

});

export default (prevState = getInitialState(), action) => {
  switch (action.type) {
      case types.FETCH_ACCOUNT_DATA_REQUEST:
        return Object.assign({}, prevState, {
            login:true,
            data: {},
            loading: true,
            error: null
        });
      case types.FETCH_ACCOUNT_DATA_SUCCESS:
        return Object.assign({}, prevState, {
            login:true,
            loading: false,
            data: action.payload,
            error: null
        });
      case types.FETCH_ACCOUNT_DATA_FAILURE:
        return Object.assign({}, prevState, {
            login:true,
            loading: false,
            error: action.payload
        });
        case types.UPDATE_BALANCE:
        let newState = Object.assign({}, prevState);
        newState.data.balance = newState.data.balance - action.payload;
        console.log(newState, '********NEWSTATE*******')
        return newState;
      default: 
       return prevState;
  }
}