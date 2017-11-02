import './Navbar.css'
import React from 'react';
import {connect} from 'react-redux';
import fetchAccount from '../actions/navbar'


class Account extends React.Component {
  constructor(props) {
    super(props);
    this.loginHandler = this.loginHandler.bind(this);
  }

  loginHandler(event){
   this.props.fetchAccount(event);
   this.toggleFormDisplay();
  }

  render() {
    console.log(this, 'IN ACCOUNT')
    return (
      <div className = 'col-2 account'>
        <div className='row'>
          <div  id="add-account" style={{display: 'none'}}>
          <p>Welcome {this.props.account.name}</p>
          <p> Your Balance: {this.props.account.balance}</p>
          </div>
          <div className="col-6 signup">
            <a id='showuser' onClick={this.toggleFormDisplay} className="btn btn-default btn-work signinbtn" href="#">Sign Up</a>
          </div>
          <div className="col-6 login">
            <a id='showacc' onClick = {this.loginHandler}  className="btn btn-default btn-work signinbtn" href="#">Login</a>
          </div>
        </div>
      </div>

    );
  }
  toggleFormDisplay () {
    let button = document.getElementById('showacc');
    if (button.style.display === 'none') button.style.display = 'inline-block';
    else button.style.display = 'none';

    let tag = document.getElementById('showuser');
    if (tag.style.display === 'none') tag.style.display = 'inline-block';
    else tag.style.display = 'none';

    let textarea = document.getElementById('add-account')
    if (textarea.style.display ==='none') textarea.style.display ='inline-block';
    else textarea.style.display ='none';
  }
}



const mapStateToProps = state => ({
  account: state.navbar.data,
  loading: state.navbar.loading,
  error: state.navbar.error,
  login:state.navbar.login

});

const mapDispatchToProps = dispatch => ({
  fetchAccount: () => {
    dispatch(fetchAccount());
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(Account);





