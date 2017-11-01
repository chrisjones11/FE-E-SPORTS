import * as types from '../actions/types';

export const getInitialState = () => ({
    loading: false,
    data: {
      "newsStories": [],
      "games": [{
        "embedded_game":
          "<Iframe width='200' height='100' url='https://www.youtube.com/embed/g9up0_VSlC8' frameborder='0' gesture='media' allowfullscreen></Iframe>",
        "tournament_name": "PGL Open Bucharest",
        "team_radiant": "LGD-GAMING",
        "team_radiant_thumb": "https://riki.dotabuff.com/t/l/10ZgSkBEDEm.png",
        "team_dire": "Evil Geniuses",
        "team_dire_thumb": "https://riki.dotabuff.com/t/l/AVX23D1jB7.png",
        "match_id": "3516590405",
        "_id": "59f1bad413d4fc3457b02eea",
        "__v": 0
      },
      {
        "embedded_game":
          "<Iframe width='200' height='100' url='https://www.youtube.com/embed/WyQT37XkcQE' frameborder='0' gesture='media' allowfullscreen></Iframe>",
        "tournament_name": "PGL Open Bucharest",
        "team_radiant": "Evil Geniuses",
        "team_radiant_thumb": "https://riki.dotabuff.com/t/l/AVX23D1jB7.png",
        "team_dire": "LGD-GAMING",
        "team_dire_thumb": "https://riki.dotabuff.com/t/l/10ZgSkBEDEm.png",
        "match_id": "3516707269",
        "_id": "59f1bad413d4fc3457b02eeb",
        "__v": 0
      },{
        "embedded_game":
          "<Iframe width='200' height='100' url='https://www.youtube.com/embed/g9up0_VSlC8' frameborder='0' gesture='media' allowfullscreen></Iframe>",
        "tournament_name": "PGL Open Bucharest",
        "team_radiant": "Northcoders",
        "team_radiant_thumb": "https://riki.dotabuff.com/t/l/10ZgSkBEDEm.png",
        "team_dire": "DotaBoys",
        "team_dire_thumb": "https://riki.dotabuff.com/t/l/AVX23D1jB7.png",
        "match_id": "3516590405",
        "_id": "59f1bad413d4fc3457b02eea",
        "__v": 0
      },
      {
        "embedded_game":
          "<Iframe width='200' height='100' url='https://www.youtube.com/embed/WyQT37XkcQE' frameborder='0' gesture='media' allowfullscreen></Iframe>",
        "tournament_name": "PGL Open Bucharest",
        "team_radiant": "Pinnacle",
        "team_radiant_thumb": "https://riki.dotabuff.com/t/l/AVX23D1jB7.png",
        "team_dire": "Federation",
        "team_dire_thumb": "https://riki.dotabuff.com/t/l/10ZgSkBEDEm.png",
        "match_id": "3516707269",
        "_id": "59f1bad413d4fc3457b02eeb",
        "__v": 0
      }],
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