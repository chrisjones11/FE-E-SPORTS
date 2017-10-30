import React from 'react';
import './Home.css';
import LiveGame from './LiveGame';
import {connect} from 'react-redux';
import fetchHome from '../actions';



class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchHome();

    
    
  }
  render() {
  
    return (
      <div className="newsgame col-9">
      <div className='screening'>
        <div className="row slideshow">
          <div className="col-12">
            <img className="homeimg" src="https://i.ytimg.com/vi/MzAvNmUn4q0/maxresdefault.jpg"></img>
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
            <p>bla bla</p>
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
            <p>Upcoming Tournments</p>
          </div>
          <div className="row">
            <div className='col-12'>
              <table className="upcomingtable">
                <tbody>
                <tr className="upcomingtable">
                  <td className="upcomingtable">
                  <img className="upcomingimg1" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865956/dota_upm_n4cvol.jpg'/>
                  </td>
                  <td className="upcomingtable">
                  <img className="upcomingimg3" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865956/dota_upm_n4cvol.jpg'/>
                  </td>
                  <td className="upcomingtable">
                  <img className="upcomingimg2" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865956/dota_upm_n4cvol.jpg'/>
                  </td>
                </tr>
                <tr className="upcomingtable">
                  <td className="upcomingtable">
                  <img className="upcomingimg1" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865956/dota_upm_n4cvol.jpg'/>
                  </td>
                  <td className="upcomingtable">
                  <img className="upcomingimg3" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865956/dota_upm_n4cvol.jpg'/>
                  </td>
                  <td className="upcomingtable">
                  <img className="upcomingimg2" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865956/dota_upm_n4cvol.jpg'/>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
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
  error: state.home.error
});

const mapDispatchToProps = dispatch => ({
  fetchHome: () => {
    dispatch(fetchHome());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


