import React, { Component } from 'react';

import WebFont from 'webfontloader';
import { Button, Col} from 'reactstrap';
import { FaCog} from 'react-icons/fa';
import {IoIosStats} from "react-icons/io";
import { toast } from 'react-toastify';

import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import Status from './components/Status/Status';
import CardContainer from './containers/CardContainer/CardContainer';

import "./styles/App.css";
import 'react-toastify/dist/ReactToastify.css';

// https://github.com/ravelinx22/react-swipeable-cards
WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif','Roboto Slab']
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { moreContentAvail: true, loggedIn: false, value:50, toggledSettings: false, toggledStats: false, modal: false, username: "Crescendo User"};
  }

  notify = () => toast.success("Secret stream added to your collection");
  login = () => {
    this.setState({loggedIn: true});
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChange = username => event => {
    this.setState({ [username]: event.target.value });
  };

  toggleSettings = () => {
      this.setState({toggledSettings: !this.state.toggledSettings});
  }

  toggleStats = () => {
      this.setState({toggledStats: !this.state.toggledStats});
  }

  toggleProfile = () => {
    this.setState({modal: !this.state.modal});
  }

  renderProfile() {
    console.log("gotoProfile called");
    if (this.state.modal==true) {
      console.log("Modal should open!");
      return (
      <Profile />
    );
  }
  }
  renderStats() {
    if ((this.state.toggledStats==true) && (this.state.loggedIn==true)) {
    return (
        <Status />
        );
    }
  }

  renderSettings() {
    if ((this.state.toggledSettings==true) && (this.state.loggedIn==true)) {
      const value=this.state.value;
    return (
        <Settings />
        );
    }
  }

  renderCards() { 
    if ((this.state.loggedIn==true) && (this.state.username!="artist")) {
      return (
      <div className="main">  
        <CardContainer />
    </div>
        );
    }

    else {
      return (
        <Login login = {this.login}/>
        );
    }
  }

  render() {
    return (
      <div className="container" style={{backgroundColor:"#166088",width:"100%"}}>
        <nav style={{backgroundColor:"#D8315B"}} className="nav">
          <Col xs="5">
            <Button onClick={this.toggleSettings} style={{left:"0",backgroundColor:"#577399"}}><FaCog/></Button>
            <Button onClick={this.toggleStats} style={{marginLeft:"5px",backgroundColor:"#577399"}}><IoIosStats/></Button>
          </Col>
          <Col xs="7">
            <div className="title" style={{fontWeight:"bold"}}>Crescendo</div>
          </Col>
        </nav>
        {this.renderProfile()}
        {this.renderSettings()}
        {this.renderStats()}
        {this.renderCards()}
     </div>
    );
  }
}

export default App;
