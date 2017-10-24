import React from 'react';
import './Home.css'




class Home extends React.Component {
  render() {
    return (
      <div className='screening'>
        <div className="row ">
          <div className="col-12">
            <h1 >Placeholder for slide show</h1>
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
          <div className='col-sm-3'>
            <p>match1</p>
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
          <div className="col-sm-12">
            <p>Upcoming Tournments</p>
          </div>
          <div className='row imgrow1'>
          <div className="col-sm-4 upcomingimgcont">
          <img className="upcomingimg1" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865956/dota_upm_n4cvol.jpg'/>
          </div>
          <div className="col-sm-4 upcomingimgcont">
          <img className="upcomingimg1" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865846/heroes_up_jvwnnb.jpg'/>
          </div>
          <div className="col-sm-4 upcomingimgcont">
          <img className="upcomingimg1" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865847/overwatch_up_tqpian.png'/>
          </div>
          </div>
          <div className='row imgrow2'>
          <div className="col-sm-4 upcomingimgcont">
          <img className="upcomingimg1" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865845/csgo_up_u2v5fm.jpg'/>
          </div>
          <div className="col-sm-4 upcomingimgcont">
          <img className="upcomingimg1" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865845/csgo_upd_jfucnu.jpg'/>
          </div>
          <div className="col-sm-4 upcomingimgcont">
          <img className="upcomingimg1" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508865848/dota2_up_hidamj.png'/>
          </div>
          </div>
          </div>
        </div>

      

    );
  }
}

export default Home;