import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { Card, CardWrapper } from 'react-swipeable-cards';
import ReactAudioPlayer from 'react-audio-player';
import { Button } from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';
import Profile from '../Profile/Profile';

//import { Test } from './ArtistCard.styles';

class ArtistCard extends PureComponent { 
  constructor(props) {
    super(props);
    this.state = {modal : props.modal};
  }
  toggleProfile = () => {
    console.log("Clocked Image");
    this.setState({modal: !this.state.modal});
  }

  render () {
    const {name, imgSrc, descripton, clipSrc, linkTwitter,linkInstagram, linkSoundCloud, linkSpotify} = this.props.data;
    return (
      <Card style={{backgroundColor:"#C0D6DF"}}
            key = {this.props.key}
            {...this.props}
      >
        <h5 style={{textAlign:"center",color:"#000000",marginTop:"5%"}} >{name}</h5>
        <img onClick={this.toggleProfile} style={{height:"50%",marginLeft:"2%",marginTop:"2%"}} src={imgSrc}/>
        <Button style={{backgroundColor:"#D8315B",border:"none", marginLeft:"10%",width:"80%",marginTop:"5%",marginBottom:"1%"}}> {descripton}</Button>
        <ReactAudioPlayer style={{marginLeft:"13%",marginTop:"1%"}}
          src={clipSrc}
          controls
        />
        <SocialIcon style={{marginLeft:"20%"}} url={linkTwitter}/>
        <SocialIcon style={{marginLeft:"2%"}} url={linkInstagram}/>
        <SocialIcon style={{marginLeft:"2%"}} url={linkSoundCloud}/>
        <SocialIcon style={{marginLeft:"2%"}} url={linkSpotify}/>
        <Profile 
          modal = {this.state.modal} 
          toggleProfile = {this.toggleProfile} 
          data = {this.props.data }/>
    </Card>
    );
  }
}

export default ArtistCard;
