import React, { Component } from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import "./App.css";
import Pic1 from "./img/artist1.jpg";
import Pic2 from "./img/artist2.jpg";
import Pic3 from "./img/artist3.jpg";
import Pic4 from "./img/artist4.jpg";
import Pic5 from "./img/artist5.jpg";
import Pic6 from "./img/artist6.jpg";
import Pic7 from "./img/artist7.jpg";
import { SocialIcon } from 'react-social-icons';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import background_video from './DJ_Audio.mp4';
import WebFont from 'webfontloader';
import { Button } from 'reactstrap';
import SwitchExample from "./SwitchExample";
import { FaCog } from 'react-icons/fa';

// https://github.com/ravelinx22/react-swipeable-cards

import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon
} from 'react-share';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif','Roboto Slab']
  }
});

class App extends Component {

  constructor(props) {
  super(props);
  this.state = { moreContentAvail: true, loggedIn: false, value:50, toggledSettings: false};
  this.login=this.login.bind(this);
  this.toggleSettings = this.toggleSettings.bind(this);
}

  login() {
    this.setState({loggedIn: true});
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  toggleSettings() {
    if (this.state.toggledSettings==true) {
      this.setState({toggledSettings: false});
    }
    else {
       this.setState({toggledSettings: true});
    }
  }


  renderSettings() {
    if ((this.state.toggledSettings==true) && (this.state.loggedIn==true)) {
    return (
      <div>
          <SwitchExample name="Rap"/>
          <SwitchExample name="Hip Hop/R&B"/>
          <SwitchExample name="Jazz"/>
          <SwitchExample name="Classical"/>
          <SwitchExample name="EDM/House"/>
          <SwitchExample name="Rock"/>
          <SwitchExample name="Pop"/>
          <SwitchExample name="Country"/>
        </div>
        );
    }
  }


  renderCards() { 
    if (this.state.loggedIn==true) {
      return (
      <div className="main">  
        <CardWrapper style={{fontFamily: 'Roboto Slab, serif'}}>
            <Card style={{backgroundColor:"#D0D0D0"}}>
              <h5 style={{textAlign:"center",color:"#000000",marginTop:"5%"}} >Mark Smith</h5>
              <img style={{height:"50%",marginLeft:"2%",marginTop:"2%"}} src={Pic1}/>
              <Button color="danger" style={{marginLeft:"10%",width:"80%",marginTop:"10%",marginBottom:"5%"}}> Support This Artist</Button>
              <SocialIcon style={{marginLeft:"20%"}} url="http://twitter.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://instagram.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://soundcloud.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://spotify.com/"/>
            </Card>

            <Card style={{backgroundColor:"#D0D0D0"}}>
              <h5 style={{textAlign:"center",color:"#000000",marginTop:"5%"}} >Benny Berger</h5>
              <img style={{height:"50%",marginLeft:"2%",marginTop:"2%"}} src={Pic2}/>
              <Button color="danger" style={{marginLeft:"10%",width:"80%",marginTop:"10%",marginBottom:"5%"}}> Support This Artist</Button>
               <SocialIcon style={{marginLeft:"20%"}} url="http://twitter.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://instagram.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://soundcloud.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://spotify.com/"/>
            </Card>

            <Card style={{backgroundColor:"#D0D0D0"}}>
              <h5 style={{textAlign:"center",color:"#000000",marginTop:"5%"}} >John Solomon</h5>
              <img style={{height:"50%",marginLeft:"2%",marginTop:"2%"}} src={Pic3}/>
              <Button color="danger" style={{marginLeft:"10%",width:"80%",marginTop:"10%",marginBottom:"5%"}}> Support This Artist</Button>
               <SocialIcon style={{marginLeft:"20%"}} url="http://twitter.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://instagram.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://soundcloud.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://spotify.com/"/>
            </Card>

            <Card style={{backgroundColor:"#D0D0D0"}}>
              <h5 style={{textAlign:"center",color:"#000000",marginTop:"5%"}} >DJ Mark</h5>
              <img style={{height:"50%",marginLeft:"2%",marginTop:"2%"}} src={Pic4}/>
              <Button color="danger" style={{marginLeft:"10%",width:"80%",marginTop:"10%",marginBottom:"5%"}}> Support This Artist</Button>
               <SocialIcon style={{marginLeft:"20%"}} url="http://twitter.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://instagram.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://soundcloud.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://spotify.com/"/>
            </Card>

            <Card style={{backgroundColor:"#D0D0D0"}}>
              <h5 style={{textAlign:"center",color:"#000000",marginTop:"5%"}} >Scott Gregus</h5>
              <img style={{height:"50%",marginLeft:"2%",marginTop:"2%"}} src={Pic5}/>
              <Button color="danger" style={{marginLeft:"10%",width:"80%",marginTop:"10%",marginBottom:"5%"}}> Support This Artist</Button>
               <SocialIcon style={{marginLeft:"20%"}} url="http://twitter.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://instagram.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://soundcloud.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://spotify.com/"/>
            </Card>

            <Card style={{backgroundColor:"#D0D0D0"}}>
              <h5 style={{textAlign:"center",color:"#000000",marginTop:"5%"}} >Lazy Bones</h5>
              <img style={{height:"50%",marginLeft:"2%",marginTop:"2%"}} src={Pic6}/>
              <Button color="danger" style={{marginLeft:"10%",width:"80%",marginTop:"10%",marginBottom:"5%"}}> Support This Artist</Button>
               <SocialIcon style={{marginLeft:"20%"}} url="http://twitter.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://instagram.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://soundcloud.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://spotify.com/"/>
            </Card>

            <Card onSwipe={this.renderNoMoreCards} style={{backgroundColor:"#D0D0D0"}}>
              <h5 style={{textAlign:"center",color:"#000000",marginTop:"5%"}} >Wop St.</h5>
              <img style={{height:"50%",marginLeft:"2%",marginTop:"2%"}} src={Pic7}/>
              <Button color="danger" style={{marginLeft:"10%",width:"80%",marginTop:"10%",marginBottom:"5%"}}> Support This Artist</Button>
               <SocialIcon style={{marginLeft:"20%"}} url="http://twitter.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://instagram.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://soundcloud.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://spotify.com/"/>
            </Card>
        </CardWrapper>
    </div>
        );
    }

    else {
      return (
        <div>
        <video className='videoTag' style={{width:"100%",opacity:"0.9"}} autoPlay loop muted>
            <source src={background_video} type='video/mp4' /> </video>
        <form noValidate autoComplete="off" style={{textAlign:"center", fontFamily: 'Roboto Slab, serif'}}>
        <TextField style={{multilineColor:"#ffffff",width:"50%"}}
          id="standard-name"
          label="Name"
          value={this.state.name}
          margin="normal"
        />
        <br/>
        <TextField style={{multilineColor:"#ffffff",width:"50%"}}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        </form>
        <Button onClick={this.login} style={{width:"50%",marginLeft:"25%", marginTop:"1%", borderRadius:"5px",padding:"5px",fontFamily: 'Roboto', backgroundColor:"#337ab7",color:"#ffffff"}}>Login</Button>
        </div>

        );
    }
  }



  render() {
    return (
      <div className="container" style={{backgroundColor:"#E8E8E8",width:"100%"}}>
        <nav style={{backgroundColor:"#FF3A4E"}} className="nav">
            <Button onClick={this.toggleSettings} style={{left:"0"}}><FaCog/></Button>
            <div className="title" style={{fontWeight:"bold"}}>Tuneder</div>
           
        </nav>
        {this.renderSettings()}
        {this.renderCards()}

        


     </div>
    );
  }
}

export default App;
