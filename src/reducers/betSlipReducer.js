import * as types from "../actions/types";
import uid from "uid";

export const getInitialState = () => ({
  loading: false,
  toBePlaced: [
    {
      BetId: 1,
      TeamName: "TeamName",
      BettingMarket: "BettingMarket",
      TournamentName: "TournamentName",
      Stake: 0,
      Return: "Return",
      Odds: 4,
      fraction: 4 / 1,
      loss: null,
      win: null
    }
  ],

  data: {
    activeBets: []
  },

  error: null
});

export default (prevState = getInitialState(), action) => {
  console.log(action, "*****");

  switch (action.type) {
    case types.INSERT_STAKE:
      const newState = Object.assign({}, prevState);
      newState.toBePlaced = prevState.toBePlaced.slice();
      const arr = newState.toBePlaced;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].BetId === action.id) {
          arr[i].Stake = action.payload;
        }
      }
      return newState;

    case types.CREATE_BET:
      let newbet = {
        BetId: uid(10),
        TeamName: "TeamName",
        BettingMarket: "BettingMarket",
        TournamentName: "TournamentName",
        Stake: 0,
        Return: "Return",
        Odds: 4,
        fraction: 4 / 1,
        loss: null,
        win: null
      };

      console.log(action.payload);
      if (Array.isArray(action.payload)) {
        console.log("firstblood or match duration");
        newbet.TeamName = "Any";
      } else {
        console.log("team to win");
      }
      return Object.assign({}, prevState, {
        toBePlaced: prevState.toBePlaced.concat(newbet)
      });

    case types.PLACE_BETS:
      let newState = Object.assign({}, prevState);
      newState.data.activeBets.concat(newState.toBePlaced);
      newState.toBePlaced = [];
      return newState;

    default:
      return prevState;
  }
};
