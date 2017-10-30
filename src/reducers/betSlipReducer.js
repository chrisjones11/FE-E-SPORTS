import * as types from '../actions/types';

export const getInitialState = () => ({
    loading: false,
    toBePlaced: [{
      BetId: 'BetId',
      TeamName: 'TeamName',
      BettingMarket: 'BettingMarket',
      TournamentName: 'TournamentName',
      Stake: 0,
      Return: 'Return',
      Odds: 4,
      fraction:4/1,
      loss:null,
      win:null

    },
    {  BetId: 'BetId',
    TeamName: 'TeamName',
    BettingMarket: 'BettingMarket',
    TournamentName: 'TournamentName',
    Stake: 0,
    Return: 'Return',
    Odds: 'Odds',
    loss:null,
    win:null
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
          newState.toBePlaced[0] = Object.assign({},prevState.toBePlaced[0])
          newState.toBePlaced[0].Stake = action.payload;
          console.log(newState, '*****')
          return newState;
      default: 
       return prevState;
  }
}

