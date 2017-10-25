import React from 'react';
import './Home.css';
import LiveGame from './LiveGame';




class Home extends React.Component {
  render() {
    return (
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
          <div className='col-sm-3 gamethumb'>
              <LiveGame />
          </div>
          <div className='col-sm-3'>
            <p>match2</p>
             </div>
          <div className='col-sm-3'>
            <p>match3</p>
            </div>
          <div className='col-sm-3'>
            <p>match4</p>

          </div>
        </div>
        <div className='row'>
          <div className="col-sm-12 upcomingtitle">
            <p>Upcoming Tournments</p>
          </div>
          <div className="row">
            <div className='col-12'>
              <table classname="upcomingtable">
                <tr classname="upcomingtable">
                  <td classname="upcomingtable">
                  <img className="upcomingimg1" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865956/dota_upm_n4cvol.jpg'/>
                  </td>
                  <td classname="upcomingtable">
                  <img className="upcomingimg3" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865956/dota_upm_n4cvol.jpg'/>
                  </td>
                  <td classname="upcomingtable">
                  <img className="upcomingimg2" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865956/dota_upm_n4cvol.jpg'/>
                  </td>
                </tr>
                <tr classname="upcomingtable">
                  <td classname="upcomingtable">
                  <img className="upcomingimg1" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865956/dota_upm_n4cvol.jpg'/>
                  </td>
                  <td classname="upcomingtable">
                  <img className="upcomingimg3" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865956/dota_upm_n4cvol.jpg'/>
                  </td>
                  <td classname="upcomingtable">
                  <img className="upcomingimg2" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865956/dota_upm_n4cvol.jpg'/>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          
         
          </div>
        </div>

      

    );
  }
}

export default Home;