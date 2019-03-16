import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import background_video from '../../assets/videos/DJ_Audio.mp4';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
//import { Test } from './Login.styles';

class Login extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="LoginWrapper">
        <div style={{backgroundColor:"#E8E8E8",paddingBottom:"2%"}}>
        <video className='videoTag' style={{width:"100%",opacity:"0.9"}} autoPlay loop muted>
            <source src={background_video} type='video/mp4' /> </video>
        <form noValidate autoComplete="off" style={{textAlign:"center", fontFamily: 'Roboto Slab, serif'}}>
          <TextField style={{multilineColor:"#ffffff",width:"50%"}}
            id="standard-name"
            label="Name"
            onChange={this.props.handleChange}
            margin="normal"
          />
          <br/>
          <TextField style={{multilineColor:"#ffffff",width:"50%"}}
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
        </form>
        <Button onClick={this.props.login} style={{width:"50%",marginLeft:"25%", marginTop:"1%", borderRadius:"5px",padding:"5px",fontFamily: 'Roboto', backgroundColor:"#337ab7",color:"#ffffff"}}>Login</Button>
      </div>
      </div>
    );
  }
}

Login.propTypes = {
  // bla: PropTypes.string,
};

Login.defaultProps = {
  // bla: 'test',
};

export default Login;
