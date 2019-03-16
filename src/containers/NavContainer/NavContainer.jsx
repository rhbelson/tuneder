import React, { PureComponent } from 'react';
import './NavContainer.css'

import { Button, Col} from 'reactstrap';
import { FaCog} from 'react-icons/fa';
import { IoIosStats } from "react-icons/io";

class NavContainer extends PureComponent { 
    constructor(props) {
        super(props);
        this.state = { toggledSettings: false, toggledStats: false };
        this.toggleSettings = this.toggleSettings.bind(this);
        this.toggleStats=this.toggleStats.bind(this);
    }

    toggleSettings() {
        this.props.buttonClick(!this.state.toggledSettings, this.state.toggledStats);
        this.setState({toggledSettings: !this.state.toggledSettings});
    }

    toggleStats() {
        this.props.buttonClick(this.state.toggledSettings, !this.state.toggleStats);
        this.setState({toggleStats: !this.state.toggleStats});
    }
  
    render () {
     
      return (
        <nav className="nav">
        <Col xs="5">
            <Button onClick={this.toggleSettings} className="navButton settingButton"><FaCog/></Button>
            <Button onClick={this.toggleStats} className="navButton statsButton"><IoIosStats/></Button>
        </Col>
        <Col xs="7">
          <div className="title" style={{fontWeight:"bold"}}>Crescendo</div>
        </Col>
        </nav>
      );
    }
  }

  
  export default NavContainer;