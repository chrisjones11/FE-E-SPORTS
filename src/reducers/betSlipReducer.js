import * as types from '../actions/types';

export const getInitialState = () => ({
    loading: false,
    toBePlaced: [{
      BetId: 1,
      TeamName: 'TeamName',
      BettingMarket: 'BettingMarket',
      TournamentName: 'TournamentName',
      Stake: 0,
      Return: 'Return',
      Odds: 4,
      fraction:4/1,
      loss:null,
      win:null,
      key: 0

    },
    {  BetId: 2,
    TeamName: 'TeamName',
    BettingMarket: 'BettingMarket',
    TournamentName: 'TournamentName',
    Stake: 0,
    Return: 'Return',
    Odds: 5,
    fraction : 5/1,
    loss:null,
    win:null,
    key:1
  }

    ],

    data: {
      activeBets:[]
    },
    
    error: null

});

export default (prevState = getInitialState(), action) => {
  console.log(action,'*****')
  switch (action.type) {
          case types.INSERT_STAKE: 
          const newState = Object.assign({}, prevState)
          newState.toBePlaced = prevState.toBePlaced.slice()
          for(var i=0; i< newState.toBePlaced.length; i++){
          newState.toBePlaced[i] = Object.assign({},prevState.toBePlaced[i])
          newState.toBePlaced[i].Stake = action.payload;
          console.log(newState, '*****')
          }
          return newState;
      default: 
       return prevState;
  }
}

