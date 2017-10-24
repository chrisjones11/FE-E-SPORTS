import React from 'react';


class Game extends React.Component {
  render() {
    return (
      <div >
        <div className="row title" >
          <div className="col-sm-12">
            <p>Team A v/s Team B </p>
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
          <table>
  <tr>
    <th>Result</th>
  </tr>
  <tr>
    <td>A  4/1</td>
    <td>B  6/1</td>
  </tr>
  <tr>
  <th>Towers</th>
  </tr>
  <tr>
    <td>A  2/1</td>
    <td>B  7/2</td>
  </tr>
  <tr>
  <th>Barracks</th>
  </tr>
  <tr>
    <td>A  2/1</td>
    <td>B  7/2</td>
  </tr>
</table>
        </div>
        </div>
        </div>
       
      
      );
  }
}

export default Game;