import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch } from '@material-ui/core';
import './SwitchCard.css';

class SwitchCard extends PureComponent { 
  constructor(props) {
    super(props);
    const {id, caption, checked} = props;
    this.state = {
      checked: checked ? checked : false,
      id: id ? id : 0,
      caption: caption? caption : 'No Caption',
    };
  }
  handleChange =(e) => {
    this.setState({checked: e.target.checked});
    if(this.props.onChange)
      this.props.onChange(this.state.id, e.target.checked);
  }
  render () {
     
    return (
      <div className="SwitchCardWrapper">
        <span className='span-title'>{this.state.caption}</span>
        <Switch 
          className='span-switch'
          onChange={this.handleChange}
          checked={this.state.checked}
          id="normal-switch"
        />
      </div>
    );
  }
}

SwitchCard.propTypes = {
  // bla: PropTypes.string,
};

SwitchCard.defaultProps = {
  // bla: 'test',
};

export default SwitchCard;
