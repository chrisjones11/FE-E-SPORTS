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
      "upcomingTourneys": [ {
        "tournament_name": "PGL Open Bucharest",
        "tournament_image":
          "http://dota2minor.pglesports.com/media/uploads/2017/08/dota2minor-heade-logo.png",
        "tournament_info":
          "TOURNAMENT SCHEDULE \n*EEST time zone \nThursday – October 19th \n10:40 – Preshow \n11:00 – LGD vs Infamous \n14:20 – Team Secret vs Immortals \n17:40 – Group A Upper Bracket Final \nFriday – October 20th \n10:40 – Preshow \n11:00 – Evil Geniuses vs VG.J \n14:20 – Na’Vi vs Mineski \n17:40 – Group B Upper Bracket Final \nSaturday – October 21st \n09:40 – Preshow \n10:00 – Group AElimination Match \n13:20 – Group B Elimination Match \n16:40 – Group A Decider Match \n20:00 – Group B Decider Match \nSunday – October 22nd \n10:40 – Preshow \n11:00 – Semifinal #1 \n14:20 – Semifinal #2 \n18:40* – Grand Final \n* Grand final starts 1h after the end of Semifinal #2 \n",
        "_id": "59f1bad413d4fc3457b02ee6",
        "__v": 0
      },
      {
        "tournament_name": "New Blood",
        "tournament_image":
          "http://www.gosugamers.net/uploads/images/events/event-page/2017/august/717-1502726912.jpeg",
        "tournament_info":
          "New Blood Championships is built as a platform for aspiring Dota 2 players, to shine and showcase their talents. A movement like this is designed to allow all grassroots level players to participate and show the world what they are made of! This time around, NBC will be focused on the South East Asian region! With a lucrative prize pool of USD 12,000 for qualifiers and USD 25,000 for grand finale, this tournament grand finale will be held at JAKARTA, INDONESIA",
        "_id": "59f1bad413d4fc3457b02ee8",
        "__v": 0
      },
      {
        "tournament_name": "ESL One Hamburg",
        "tournament_image":
          "http://www.gosugamers.net/uploads/images/events/event-page/2017/september/725-1505372801.jpeg",
        "tournament_info":
          "In less than a month we are getting the season’s first Major underway at ESL One Hamburg and the eight teams are ready to go. In the lead-up we’ve finalized our tournament schedule, as well as the details for the prize money distribution - take a look! In regards to the Bo3 grand finals - ESL One Hamburg itself was planned, scheduled and budgeted before the announcement of the 2017-18 Competitive Season and its Pro Circuit. As such it was structured as an eight team, single elimination tournament with the final two days being played inside the Barclaycard Arena in Hamburg. On top of the one million Dollar prize pool, the players are of course also competing for the valuable Pro Circuit points, which are needed to qualify for TI8 down the line. 1500 of those are up for grabs at ESL One Hamburg and only the top four teams will get a share of the spoils.",
        "_id": "59f1bad413d4fc3457b02ee7",
        "__v": 0
      }]
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