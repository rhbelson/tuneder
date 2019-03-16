import React, { Component } from 'react';

import WebFont from 'webfontloader';

import { toast } from 'react-toastify';

import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Login from './containers/Login/Login';
import Status from './components/Status/Status';
import CardContainer from './containers/CardContainer/CardContainer';
import NavContainer from './containers/NavContainer/NavContainer';

import "./styles/App.css";
import 'react-toastify/dist/ReactToastify.css';

let firebase = require("firebase");
let config = {
    apiKey: "AIzaSyDJps32F1QsgoVrC0BQeTqu-DgtpGOskVM",
    authDomain: "crescendo-music.firebaseapp.com",
    databaseURL: "https://crescendo-music.firebaseio.com",
    projectId: "crescendo-music",
    storageBucket: "crescendo-music.appspot.com",
    messagingSenderId: "514981425947"
  };
  firebase.initializeApp(config);


// https://github.com/ravelinx22/react-swipeable-cards
WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif','Roboto Slab']
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      moreContentAvail: true, 
      loggedIn: false, 
      value:50, 
      toggledSettings: false, 
      toggledStats: false, 
      modal: false, 
      username: "Crescendo User", 
      artists:[],
      artistProfile:[]
    };
  }

  componentDidMount() {
    return firebase.database().ref('Artists/').once('value').then(snapshot => {
      const attributes = snapshot.val();
      this.setState({artists: attributes});
      return attributes;
    })
  
  }

  notify = () => toast.success("Secret stream added to your collection");

  login = () => {
    this.setState({loggedIn: true});
  }

  handleUserChange = (event) => {
    this.setState({ username: event.target.value });
  };



  optionEdit = (settingValue, statsValue, loggedInStatus) => {
      this.setState({
        toggledSettings: settingValue,
        toggledStats: statsValue,
        loggedIn: loggedInStatus
      });
    
  }

  showProfile = (profileStatus, artistProfile) => {
    console.log(artistProfile);
    this.setState({
      modal: profileStatus,
      artistProfile: artistProfile
    })
  }

  closeProfile = (profileStatus) => {
    this.setState({
      modal: profileStatus
    })
  }

  render() {
    const { loggedIn, toggledSettings, toggledStats, modal, username, artists, artistProfile} = this.state;
    return (
      <div className="container">

      
        {!(loggedIn&&(username !=='artist')) && 
          <Login
            login = {this.login}
            handleChange = {this.handleUserChange} 
          />
        }
        <NavContainer buttonClick={this.optionEdit.bind(this)} loggedIn={ loggedIn }/>
        <div className = "main">
          {modal && <Profile modal={modal} artistProfile={artistProfile} closeProfile={this.closeProfile.bind(this)}/>}
          {(loggedIn&&toggledSettings) && <Settings />}
          {(loggedIn&&toggledStats) && <Status />}
          {(loggedIn&&(username !=='artist')) && <CardContainer artists={artists} showProfile={this.showProfile.bind(this)}/>}
        </div>

      </div>
    );
  }
}

export default App;
