import React, { Component } from "react";
import Switch from "react-switch";
 
class SwitchExample extends Component {
  constructor(props) {
    super();
    this.state = { checked: false, name: props.name };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
  }
 
  render() {
    return (
      <label htmlFor="normal-switch">
        <span>{this.state.name}</span>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          id="normal-switch"
        />
      </label>
    );
  }
}

export default SwitchExample;