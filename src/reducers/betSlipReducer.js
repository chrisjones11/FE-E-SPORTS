import * as types from "../actions/types";
import uid from "uid";

export const getInitialState = () => ({
  loading: false,
  toBePlaced: [],
    totalBet: null,
    activeBets:[],
      error: null
});

export default (prevState = getInitialState(), action) => {
  console.log(action, "*****");

  switch (action.type) {

//////////////////////////////////////////////////////////////////
    //      case types.POST_BETSLIP_DATA_REQUEST:
    // return Object.assign({}, prevState, {
    //     loading: true,
    //     activeBets: [],
    //     error: null
    // });
    //   case types.POST_BETSLIP_DATA_SUCCESS:
    // return Object.assign({}, prevState, {
    //     loading: false,
    //     activeBets: action.payload,
    //     error: null
    // });
    //     case types.POST_BETSLIP_DATA_FAILURE:
    // return Object.assign({}, prevState, {
    //     loading: false,
    //     activeBets: [],
    //     error: action.payload
    // });
////////////////////////////////////////////////////////////////////////
          case types.INSERT_STAKE: 
          let newState = Object.assign({}, prevState)
          newState.toBePlaced = prevState.toBePlaced.slice()
          newState.totalBet = 0;
          let arr = newState.toBePlaced
          for(var i=0; i< arr.length; i++){
            if (arr[i].BetId === action.id){
              arr[i].Stake = action.payload;
            }
          }
          for(var i=0; i< arr.length; i++){
            newState.totalBet += Number(arr[i].Stake); 
          }
          return newState;

////////////////////////////////////////////////////////////////////////////////////

          case types.CREATE_BET:
          let newbet = {
            BetId: uid(10),
            IsActive: 'true',
            TeamName: 'TeamName',
            BettingMarket: 'BettingMarket',
            TournamentName: 'TournamentName',
            Stake: 0,
            Return: 'Return',
            Odds: 4,
            fraction:'4/1',
           win:'hey'
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
            newbet.fraction = action.payload.toWin.fraction;
            
          }
          return Object.assign({}, prevState, {
            toBePlaced: prevState.toBePlaced.concat(newbet)
          });

/////////////////////////////////////////////////////////////////////////////

        case types.REMOVE_ALL:
          return Object.assign({}, prevState, {
            toBePlaced: []
          });
      
//////////////////////////////////////////////////////////////////////////////////////

       case types.PLACE_BETS:
      return Object.assign({}, prevState, {
      activeBets : prevState.activeBets.concat(prevState.toBePlaced),
      toBePlaced :[]
      })

    
/////////////////////////////////////////////////////////////////////////////            
      default: 
       return prevState;
  }
}

 ////////////////////////////////////////////////////////////////////////////////
