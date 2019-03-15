import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './NavBar.styles';

class NavBar extends PureComponent { 
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
      <div className="NavBarWrapper">
        <nav style={{backgroundColor:"#D8315B"}} className="nav">
          <Col xs="5">
            <Button onClick={this.props.toggleSettings} style={{left:"0",backgroundColor:"#577399"}}><FaCog/></Button>
            <Button onClick={this.props.toggleStats} style={{marginLeft:"5px",backgroundColor:"#577399"}}><IoIosStats/></Button>
          </Col>
          <Col xs="7">
            <div className="title" style={{fontWeight:"bold"}}>Crescendo</div>
          </Col>
        </nav> 
      </div>
    );
  }
}

export default NavBar;
