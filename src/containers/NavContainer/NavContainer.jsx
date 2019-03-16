import React, { PureComponent } from 'react';
import './NavContainer.css'

import { Button, Col} from 'reactstrap';
import { FaCog } from 'react-icons/fa';
import { IoIosStats } from "react-icons/io";

class NavContainer extends PureComponent { 
    constructor(props) {
        super(props);
        this.state = { toggledSettings: false, toggledStats: false, loggedIn:this.props.loggedIn };
        this.toggleSettings = this.toggleSettings.bind(this);
        this.toggleStats=this.toggleStats.bind(this);
        this.logOut=this.logOut.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({loggedIn:nextProps.loggedIn})
    }

    toggleSettings() {
        this.props.buttonClick(!this.state.toggledSettings, this.state.toggledStats, this.state.loggedIn);
        this.setState({toggledSettings: !this.state.toggledSettings});
    }

    toggleStats() {
        this.props.buttonClick(this.state.toggledSettings, !this.state.toggledStats, this.state.loggedIn);
        this.setState({toggledStats: !this.state.toggledStats});
    }

    logOut() {
        this.props.buttonClick(this.state.toggledSettings, this.state.toggledStats, !this.state.loggedIn);
    }
  
    render () {
      return (
        <nav className="nav">
        <Col xs="5">
            <Button onClick={this.toggleSettings} className="navButton settingButton"><FaCog/></Button>
            <Button onClick={this.toggleStats} className="navButton statsButton"><IoIosStats/></Button>
        </Col>
        <Col xs="7" className="navTitle">
          <div className="title" style={{fontWeight:"bold"}}>Crescendo</div>
          {this.state.loggedIn && <Button onClick={this.logOut} className="navButton backButton">Logout</Button>}
        </Col>
        </nav>
      );
    }
  }

  
  export default NavContainer;