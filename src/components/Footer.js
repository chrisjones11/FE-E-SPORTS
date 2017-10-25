import React from 'react';
import './Footer.css'

class  Footer extends React.Component {
    constructor(props){
        super(props); 

        }
        render (){
return(
  <div>
    <div className='row footerdiv'>
      <div className='col-sm-6 '>
        <p className='copyrightcol'>copyright © 2017 JACS</p>
      </div>
      <div className='col-sm-6'>
        <div className='row'>
          <div className='col-sm-12 '>
            <p className='instructions'>terms of use |
               gamble aware |
               privacy policy</p>
           </div>
      
          </div>
        </div>    

      </div>
    </div>
  


);
        }
      }

export default Footer;