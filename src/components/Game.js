import React from 'react';
import "./Game.css"


class Game extends React.Component {
  render() {
    return (
      <div className="title">
        <div className="row " >
          <div className="col-sm-12">
            <h1>Team A v/s Team B - NorthCoders Invitational </h1>
            <p>Go for a Bet!!!</p>
          </div>
        </div>
        <div className="row gametitleimgcontainer">
          <div className="col-sm-12">
            <img className="gametitleimg" src='http://res.cloudinary.com/diohwb5lp/image/upload/v1508778140/titlepage_image_lbtxjf.png'/>
          </div>
        </div>
        <div className="row">
          < div className="col-sm-12">
          <table className="oddstable">
            <tbody>
  <tr>
    <th colSpan="2">Result</th>
  </tr>
  <tr>
    <td>A  4/1</td>
    <td>B  6/1</td>
  </tr>
  <tr>
  <th colSpan="2">Towers</th>
  </tr>
  <tr>
    <td>A  2/1</td>
    <td>B  7/2</td>
  </tr>
  <tr>
  <th colSpan="2">Barracks</th>
  </tr>
  <tr>
    <td>A  2/1</td>
    <td>B  7/2</td>
  </tr>
  </tbody>
</table>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

        </div>
        </div>
        </div>
       
      
      );
  }
}

export default Game;