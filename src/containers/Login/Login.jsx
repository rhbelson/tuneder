import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import background_video from '../../assets/videos/DJ_Audio.mp4';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import './Login.css';

class Login extends PureComponent { 
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="nav-container container">
        <video className='videoTag'  autoPlay loop muted>
            <source src={background_video} type='video/mp4' /> 
        </video>

        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="username" />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-key"></i></span>
                  </div>
                  <input type="password" className="form-control" placeholder="password" />
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox"/>Remember Me
                </div>
                <div className="form-group">
                  <button className="btn float-right login_btn" onClick={this.props.login}>Login</button>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?<a href="#">Sign Up</a>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
     
    );
  }
}


export default Login;
