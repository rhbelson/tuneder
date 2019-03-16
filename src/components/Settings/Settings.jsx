import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SwitchExample from '../../SwitchExample';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import './Settings.css'

//import { Test } from './Settings.styles';

class Settings extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      value : 50,
    };
  }

  handleChange = () => {
    
  }
  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="SettingsWrapper">
        <div style={{marginTop:"2%",fontFamily: 'Roboto Slab, serif'}}>
          <SwitchExample name="Rap"/>
          <SwitchExample name="Hip Hop/R&B"/>
          <SwitchExample name="Jazz"/>
          <SwitchExample name="Classical"/>
          <SwitchExample name="EDM/House"/>
          <SwitchExample name="Rock"/>
          <SwitchExample name="Pop"/>
          <SwitchExample name="Country"/>
        
          <div style={{backgroundColor:"#F6F5AE",padding:"2%"}}>
            <Typography style={{width:"75%",fontSize: '18px',fontFamily: 'Roboto Slab, serif',marginTop:"1%"}} id="label">Adjust Your Radius: <a style={{fontWeight:"bold"}}>{ this.state.value } miles from me</a> </Typography>
            <Slider style={{width:"65%",marginTop:"2%",marginBottom:"5%"}}
              value={this.state.value}
              aria-labelledby="label"
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
