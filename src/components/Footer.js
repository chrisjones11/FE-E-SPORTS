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
          <div className='col-sm-2 '>
            <p className='copyrightcol'>copyright © 2017 JACS</p>
          </div>
          <div className='col-1'>
            <img className='social-icon'src="http://res.cloudinary.com/diohwb5lp/image/upload/v1509674037/linkedin_nhhknh.png" />
          </div>
          <div className='col-1'>
            <img className='social-icon'src="http://res.cloudinary.com/diohwb5lp/image/upload/v1509674037/facebook-logo_matzf4.png" />
          </div>
          <div className='col-1'>
            <img className='social-icon'src="http://res.cloudinary.com/diohwb5lp/image/upload/v1509674037/twitter_yxcwtb.png" />
          </div>
          <div className='col-1'>
            <img className='social-icon'src="http://res.cloudinary.com/diohwb5lp/image/upload/v1509674037/share_aga5vr.png" />
          </div>
          <div className='col-sm-6'>
            <p className='instructions'>terms of use | gamble aware | privacy policy</p>
          </div>    
    </div>
  </div>
   
  


);
        }
      }

export default Footer;