const types = require('./types');

//actions
export const addBet = (data) => ({
    type: types.ADD_BET,
    payload: {
      matchId: data.matchId,
      teamId: data.teamId,
      market: data.market,
      comp: data.comp,
      odds: data.odds
    }
});

export const getStake = (data) => ({
    type: types.GET_STAKE,
    payload: data
});

export const getReturn = (data) => ({
    type: types.GET_RETURN,
    payload: {
        stake: data.stake,
        odds: data.odds
    } 
});

export const removeBet = (data) => ({
    type: types.REMOVE_BET,
    payload: {
        betId: data
    }
});

export const removeAll = (data) => ({
    type: types.REMOVE_All,
    payload: {
        betIds: []
    }
});

export const getTotal = (data) => ({
    type: types.GET_TOTAL,
    payload: {
        Stakes: []
    }
});

export const placeBet = (data) => ({
    type: types.PLACE_BET,
    payload: {
        betIds: [],
        total: data.total
    }
});

export const getGame = (data) => ({
    type: types.GET_GAME,
    payload: {
        teamNames: data.teamNames,
        matchId: data.matchId,

    }
});

export const getMatchDetails = (matchId) => ({
    type: types.GET_MATCH_DETAILS,
    payload: matchId
});

export const getUpcoming = (data) => ({
    type: types.GET_UPCOMING,
    payload: []
});

export const getNewsStories = (data) => ({
    type: types.GET_NEWS_STORIES,
    payload: []
});

export const returnMoney = (data) => ({
    type: types.RETURN_MONEY,
    payload: {}
});