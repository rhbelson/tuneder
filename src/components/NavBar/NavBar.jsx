import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Col} from 'reactstrap';
import { FaCog} from 'react-icons/fa';
import {IoIosStats, IoIosPower} from "react-icons/io";
import './NavBar.css';
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
        <nav className="nav"  >
          <div className='flex-right'>
            <Button onClick={this.props.toggleSettings} style={{left:"0"}}><FaCog/></Button>
            <Button onClick={this.props.toggleStats} style={{marginLeft:"5px"}}><IoIosStats/></Button>
          </div>
            <div className="title" style={{fontWeight:"bold"}}>Crescendo</div>
          <Button className='btn-logout' onClick={this.props.toggleStats} style={{marginLeft:"5px"}}><IoIosPower/></Button>
         
        </nav> 
      </div>
    );
  }
}

export default NavBar;
