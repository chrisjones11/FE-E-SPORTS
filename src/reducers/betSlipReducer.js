import * as types from '../actions/types';
import uid from 'uid'; 

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
      }
    ],
    totalBet: null,
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
          newState.totalBet = 0;
          const arr = newState.toBePlaced
          for(var i=0; i< arr.length; i++){
            if (arr[i].BetId === action.id){
              arr[i].Stake = action.payload;
            }
          }
          for(var i=0; i< arr.length; i++){
            newState.totalBet += Number(arr[i].Stake); 
          }
          return newState;

          case types.CREATE_BET:
          let newbet = {
            BetId: uid(10),
            TeamName: 'TeamName',
            BettingMarket: 'BettingMarket',
            TournamentName: 'TournamentName',
            Stake: 0,
            Return: 'Return',
            Odds: 4,
            fraction:4/1,
            loss:null,
            win:null,
            }
          console.log(action.payload)
          if (Array.isArray(action.payload)) {console.log('firstblood or match duration')
            newbet.TeamName = 'Any';
            newbet.BettingMarket = action.payload[1];
            newbet.TournamentName = action.payload[0].match_id;
            newbet.Odds = action.payload[0][action.payload[1]].odd;
            newbet.fraction = action.payload[0][action.payload[1]].fraction;
} 
          else {console.log('team to win')
            newbet.TeamName = action.payload.team_name;
            newbet.BettingMarket = action.payload.team_name + ' to win';
            newbet.TournamentName = action.payload.match_id;
            newbet.Odds = action.payload.toWin.odd;
            newbet.fraction = action.payload.toWin.farction;
            
          }
          return Object.assign({}, prevState, {
            toBePlaced: prevState.toBePlaced.concat(newbet)
          });

        case types.REMOVE_ALL:
          return Object.assign({}, prevState, {
            toBePlaced: []
          });
            
      default: 
       return prevState;
  }
}

