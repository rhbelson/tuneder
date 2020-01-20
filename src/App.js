import React, { Component } from 'react';
import WebFont from 'webfontloader';
import { toast } from 'react-toastify';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Login from './containers/Login/Login';
import Status from './components/Status/Status';
import CardContainer from './containers/CardContainer/CardContainer';

import "./styles/App.css";

import NavBar from './components/NavBar/NavBar';


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

  handleUserChange = (event) => {
    this.setState({ username: event.target.value });
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

  render() {
    const { loggedIn, toggledSettings, toggledStats, modal, username} = this.state;
    return (
      <div>
        {!(loggedIn&&(username !='artist')) && 
        <Login
          login = {this.login}
          handleChange = {this.handleUserChange} 
        />
        }
      {loggedIn&&<div className="container-main container" style={{backgroundColor:"#f8f9fc",width:"100%"}}>
        <NavBar toggleSettings={this.toggleSettings} toggleStats={this.toggleStats} />
        {modal && <Profile />}
        {(toggledSettings) && <Settings />}
        {(toggledStats) && <Status />}
        {/* {(username !='artist') && <CardContainer/>} */}
        <CardContainer/>
      </div>}
      </div>
    );
  }
}

export default App;
