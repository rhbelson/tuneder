import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SwitchExample from '../../SwitchExample';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import SwitchCard from '../SwitchCard/SwitchCard';
import RadiusSlider from '../RadiusSlider/RadiusSlider';
import './Settings.css';

class Settings extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      value : 50,
      data : [
        { id: '1', name: 'Rap' } ,
        { id: '2', name: 'Hip Hop/R&B'} ,
        { id: '3', name: 'Jazz'} ,
        { id: '4', name: 'Classical'} ,
        { id: '5', name: 'EDM/House'} ,
        { id: '5', name: 'Rock'} ,
        { id: '6', name: 'Pop'} ,
        { id: '7', name: 'Country'} ,
      ]
    };
  }

  render () {
    const {data} = this.state;
    return (
      <div className="SettingsWrapper">
        <div className='row'>
          {
            data.map(item => (
              <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <SwitchCard id={item.id} caption={item.name} /> 
              </div>
            ))
          }
        </div>
        <div className='row'>
          <div className='col-12 col-md-8 col-lg-6'>
            <RadiusSlider />
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
