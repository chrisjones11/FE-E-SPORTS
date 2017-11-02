import React from 'react';
import './Home.css';
import LiveGame from './LiveGame';
import {connect} from 'react-redux';
import fetchHome from '../actions';
import createReactClass from 'create-react-class';
import Carousel from 'nuka-carousel';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

    // this.props.fetchHome();
  }
  render() {
  console.log(this);
    return (
      <div className="newsgame col-9">
      <div className='screening'>
        <div className="row slideshow">
          <div className="col-12">
          <Carousel autoplay='true'>
            {this.props.data.newsStories.map(story => {
              return (
                <div>
                <img className="slideimage"src={story.imageUrl}/>
                <h4 className='imagetext'>{story.headline}</h4>
                </div>
              )
            })}
      
      </Carousel>
          </div>
        </div>
        <div className="row gamedisplayheading">
          <div className="col-12">
            <h1 >Live Games</h1>
          </div>
        </div>
        <div className='row gamedisplayheading'>
          <div className='col-sm-4'>
            <p>DOTA-2</p>
          </div>
          <div className='col-sm-4'>
            <p>LOL</p>
          </div>
          <div className='col-sm-4'>
            <p>CS:GO</p>
          </div>
       </div>
       <div className='row gamedisplay'>
         {console.log(this.props.data, '********')}
            {this.props.data.games.map((game) => {
              return (
                <div className='col-sm-3 gamethumb'>
                <div key={game.match_id}>
                  <LiveGame thumbnail = {game.embedded_game} team_dire = {game.team_dire} team_radiant = {game.team_radiant} tournament_name={game.tournament_name}/>
                </div>
                </div>
              ) 
            })} 
            
        </div>
        <div className='row'>
          <div className="col-sm-12 upcomingtitle">
            <h1>Upcoming Tournments</h1>
          </div>
          <div className="row upcomingimages">
          {this.props.data.upcomingTourneys.map((tourney) => {
            {var divStyle = {
              backgroundImage: 'url('+ tourney.tournament_image +')',
              width: '100px',
              height: '100px',
            }}
              return (
                <div className='col-sm-4' key={tourney._id}>
                  <div className='row'>
                    <div style={divStyle} className="col-12 tourneyimage">
                    </div>
                  </div>
                  <div className='row'>
                    <div className="col-12">
                      <p>{tourney.tournament_name}</p>
                    </div>
                  </div>
                </div>
              ) 
            })} 
          
          </div>
          
         
          </div>
        </div>
        </div>
      

    );
  }
}

const mapStateToProps = state => ({
  data: state.home.data,
  loading: state.home.loading,
  error: state.home.error,

});

const mapDispatchToProps = dispatch => ({
  fetchHome: () => {
    dispatch(fetchHome());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


