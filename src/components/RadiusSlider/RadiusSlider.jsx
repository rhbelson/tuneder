import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import 'rc-slider/assets/index.css';
//import Slider from '@material-ui/lab/Slider';
import Slider from 'rc-slider';
import'./RadiusSlider.css';
const Handle = Slider.Handle;

class RadiusSlider extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      value : 50
    };
  }
  handleChange = (e) => {
    console.log(e);
    this.setState({value: e});
  }
  
  handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Handle value={value} {...restProps} />
    );
  };

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="RadiusSliderWrapper">
        <Typography className="lbl-caption">
          Adjust Your Radius: 
          <a>{ this.state.value } miles from me</a> 
        </Typography>
        <Slider className='slider-radius'
          defaultValue={this.state.value}
          min={0}
          max={1000}
          step={1}
          //handle={this.handle}
          trackStyle={{ backgroundColor: '#4e73df', height: 10 }}
          handleStyle={{
            height: 28,
            width: 28,
            marginLeft: -14,
            marginTop: -9,
            backgroundColor: '#fefefe',
            
          }}
          railStyle={{backgroundColor: '#4e73df',opacity: 0.5, height: 10 }}                
          aria-labelledby="label"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

RadiusSlider.propTypes = {
  // bla: PropTypes.string,
};

RadiusSlider.defaultProps = {
  // bla: 'test',
};

export default RadiusSlider;
