import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
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
      value : this.props.value,
      rapChecked: this.props.rapChecked,
      hipChecked: this.props.hipChecked,
      jazzChecked: this.props.jazzChecked,
      classicalChecked: this.props.classicalChecked,
      edmChecked: this.props.edmChecked,
      rockChecked: this.props.rockChecked,
      popChecked: this.props.popChecked,
      countryChecked: this.props.countryChecked,
    };
    this.checked = this.checked.bind(this);
  }

  handleChange = (event, value) => {
    this.props.setValue(value);
    this.setState({ value });
  }

  checked = (value, name) => {
    
    if(name === "Rap") {this.setState({ rapChecked : value}); this.props.setRapChecked(value);}
    else if (name === "Hip Hop/R&B") {this.setState({ hipChecked : value}); this.props.setHipChecked(value);}
    else if (name === "Jazz") {this.setState({ jazzChecked : value}); this.props.setJazzChecked(value);}
    else if (name === "Classical") {this.setState({ classicalChecked : value}); this.props.setClassicalChecked(value);}
    else if (name === "EDM/House") {this.setState({ edmChecked : value}); this.props.setEDMChecked(value);}
    else if (name === "Rock") {this.setState({ rockChecked : value}); this.props.setRockChecked(value);}
    else if (name === "Pop") {this.setState({ popChecked : value}); this.props.setPopChecked(value);}
    else {this.setState({ countryChecked : value}); this.props.setCountryChecked(value);}

    
  }
  render () {

    const { rapChecked, hipChecked, jazzChecked, classicalChecked, edmChecked, rockChecked, popChecked, countryChecked} = this.state;

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="SettingsWrapper">
        <div style={{marginTop:"2%",fontFamily: 'Roboto Slab, serif'}}>
          <SwitchExample name="Rap" settingChecked={rapChecked} checked={this.checked.bind(this)}/>
          <SwitchExample name="Hip Hop/R&B" settingChecked={hipChecked} checked={this.checked.bind(this)}/>
          <SwitchExample name="Jazz" settingChecked={jazzChecked} checked={this.checked.bind(this)}/>
          <SwitchExample name="Classical" settingChecked={classicalChecked} checked={this.checked.bind(this)}/>
          <SwitchExample name="EDM/House" settingChecked={edmChecked} checked={this.checked.bind(this)}/>
          <SwitchExample name="Rock" settingChecked={rockChecked} checked={this.checked.bind(this)}/>
          <SwitchExample name="Pop" settingChecked={popChecked} checked={this.checked.bind(this)}/>
          <SwitchExample name="Country" settingChecked={countryChecked} checked={this.checked.bind(this)}/>
        
          <div style={{backgroundColor:"#F6F5AE",padding:"2%"}}>
            <Typography id="label" style={{width:"75%",fontSize: '18px',fontFamily: 'Roboto Slab, serif',marginTop:"1%"}} id="label">Adjust Your Radius: <a style={{fontWeight:"bold"}}>{ this.state.value } miles from me</a> </Typography>
            <Slider style={{width:"65%",marginTop:"2%",marginBottom:"5%"}}
              value={this.state.value}
              step={1}
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
