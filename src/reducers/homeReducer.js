import * as types from '../actions/types';

export const getInitialState = () => ({
    loading: false,
    data: {
      "newsStories": [{
        "headline":
          "Mineski take down LGD and claim the PGL Open Bucharest title",
        "body":
          "Mineski claim victory at the PGL Open Bucharest, easily sweeping through LGD Gaming in the Grand Finals.The Grand Finals of PGL Open Bucharest would see Mineski going up against LGD Gaming. The Chinese squad had a wobbly beginning to the tournament but had picked up their game a lot even though they were playing with a stand-in after Chen 'Victoria' Guanhong had a medical condition which meant he had to be replaced. The SEA squad, on the other hand, would be searching for victory and to claim the top spot in the Dota 2 Pro Circuit point rankings – after their withdrawal from the upcoming Dota Pit Minor.",
        "imageUrl":
          "http://www.gosugamers.net/files/images/news/2017/october/mineski_small1%20top.jpg",
        "date": " 22 October 2017 18:26",
        "url":
          "http://www.gosugamers.net/dota2/news/45529-mineski-take-down-lgd-and-claim-the-pgl-open-bucharest-title",
        "_id": "59f1bad413d4fc3457b02ee1",
        "__v": 0
      },
      {
        "headline":
          "Infamous-P4pita interview: “I knew I had to move from Argentina for shot at a professional career”",
        "body":
          "For the first time in their few years history, Infamous have dropped the idea of a full Peruvian roster. They qualified to TI 7 with an Argentinian coach -  who now joined the team in the mid lane position.  Mariano 'P4pita' Caneda boasts being the coach of the first ever South American qualified team to The International and is now playing in the first ever Dota 2 minor. He has done that only through hard work and life changing decisions. We got the chance to have a chat with him on the first day of the PGL Open Bucharest minor, and although it was right after a lost series against LGD Gaming, he was extremely happy to share all of his thoughts and talk about his long journey from pub matches to TI7.",
        "imageUrl":
          "http://www.gosugamers.net/files/images/features/2017/october/papita_small.jpg",
        "date": "20 October 2017 16:13",
        "url":
          "http://www.gosugamers.net/dota2/features/45509-infamous-p4pita-interview-i-knew-i-had-to-move-from-argentina-for-shot-at-a-professional-career",
        "_id": "59f1bad413d4fc3457b02ee2",
        "__v": 0
      },
      {
        "headline":
          "Xboct interview: 'Coaching is something that I really needed to happen in my life'",
        "body":
          "Alexander 'XBOCT' Dashkevich is an iconic figure for the entire Dota scene. TI 1 champion, three times in a row finalist at the same event, XBOCT was and still is to many youngsters a source of inspiration. Many of the Dota 2 fans know him and remember him for what he accomplished for over five years at Natus Vincere alongside Dendi, Funn1k, Puppey and Kuroky.",
        "imageUrl":
          "http://www.gosugamers.net/files/images/features/2017/october/xboct%202.jpg",
        "date": "20 October 2017 14:15",
        "url":
          "http://www.gosugamers.net/dota2/features/45506-xboct-interview-coaching-is-something-that-i-really-needed-to-happen-in-my-life",
        "_id": "59f1bad413d4fc3457b02ee3",
        "__v": 0
      },
      {
        "headline":
          "Team Liquid return from the post TI7 vacation to claim the first minor of the season",
        "body":
          "Undefeated up to the StarLadder i-League Invitational Season 3 grand finals, Team Liquid looked to prove everyone that winning The International is not a curse, but rather just the beginning of the long road to the next Aegis of the Immortals.",
        "imageUrl":
          "http://www.gosugamers.net/files/images/news/2017/october/Liquid%20SLchamp.jpg",
        "date": "16 October 2017 00:22",
        "url":
          "http://www.gosugamers.net/dota2/news/45483-team-liquid-return-from-the-post-ti7-vacation-to-claim-the-first-minor-of-the-season",
        "_id": "59f1bad413d4fc3457b02ee4",
        "__v": 0
      },
      {
        "headline":
          "[Op-ed] Not here for your viewing pleasure; How ‘esportsmen’ continue to objectify women",
        "body":
          "It was a case of social media promotion of a newly published article on their website. A failed attempt to highlight the ‘good eye’ these CS:GO players have on and off the screen.",
        "imageUrl":
          "http://www.gosugamers.net/files/images/features/2017/october/gender.jpg",
        "date": " 11 October 2017 17:15",
        "url":
          "http://www.gosugamers.net/dota2/features/45461-op-ed-not-here-for-your-viewing-pleasure-how-esportsmen-continue-to-objectify-women",
        "_id": "59f1bad413d4fc3457b02ee5",
        "__v": 0
      }],
      "games": [{
        "embedded_game":
          "https://cdn0.gamesports.net/storage/40000/40637.jpg",
        "tournament_name": "Northcoders Invitational",
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
          "http://e-clubmalaysia.com/dota2/wp-content/uploads/amd_dota2_tournament_2013.png",
        "tournament_name": "AMD Tournament",
        "team_radiant": "Evil Geniuses",
        "team_radiant_thumb": "https://riki.dotabuff.com/t/l/AVX23D1jB7.png",
        "team_dire": "LGD-GAMING",
        "team_dire_thumb": "https://riki.dotabuff.com/t/l/10ZgSkBEDEm.png",
        "match_id": "3516707269",
        "_id": "59f1bad413d4fc3457b02eeb",
        "__v": 0
      },{
        "embedded_game":
        "http://oce.lolesports.com/img/twitter-share-logo.jpg",
        "tournament_name": "LoL Masters",
        "team_radiant": "Northcoders",
        "team_radiant_thumb": "https://riki.dotabuff.com/t/l/10ZgSkBEDEm.png",
        "team_dire": "LoLBoys",
        "team_dire_thumb": "https://riki.dotabuff.com/t/l/AVX23D1jB7.png",
        "match_id": "3516590405",
        "_id": "59f1bad413d4fc3457b02eea",
        "__v": 0
      },
      {
        "embedded_game":
          "https://i.pinimg.com/736x/b4/2b/82/b42b8281de97b9a1c48217cd8e62d6d0.jpg",
        "tournament_name": "CS:GO Invitational",
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
      }],
      
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