import React, { Component } from 'react';

import WebFont from 'webfontloader';
// import { Button, Col} from 'reactstrap';
// import { FaCog} from 'react-icons/fa';
// import { IoIosStats } from "react-icons/io";
import { toast } from 'react-toastify';

import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Login from './containers/Login/Login';
import Status from './components/Status/Status';
import CardContainer from './containers/CardContainer/CardContainer';

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
    this.state = { moreContentAvail: true, loggedIn: false, value:50, toggledSettings: false, toggledStats: false, modal: false, username: "Crescendo User", artists:[]};
  }


  componentDidMount() {
    console.log("Reading Data");
    return firebase.database().ref('Artists/').once('value').then(snapshot => {
      const attributes = snapshot.val();
      this.setState({artists: attributes});
      // return Object.keys(attributes).map(n => Object.assign({}, attributes[n]));
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
    const { loggedIn, toggledSettings, toggledStats, modal, username, artists} = this.state;
    return (
      <div>
        {!(loggedIn&&(username !=='artist')) && 
        <Login
          login = {this.login}
          handleChange = {this.handleUserChange} 
        />
        }
      <div className="container" style={{backgroundColor:"#166088",width:"100%"}}>
        {modal && <Profile />}
        {(loggedIn&&toggledSettings) && <Settings />}
        {(loggedIn&&toggledStats) && <Status />}
        {(loggedIn&&(username !=='artist')) && <CardContainer artists={artists} />}
     </div>

      </div>
    );
  }
}

export default App;
