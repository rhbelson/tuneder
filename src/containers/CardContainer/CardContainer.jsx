import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './CardContainer.styles';
import { ToastContainer, toast } from 'react-toastify';
import { Card, CardWrapper } from 'react-swipeable-cards';
import ReactAudioPlayer from 'react-audio-player';
import Clip1 from "../../assets/musics/Noname_clip.mp3";
import { Button } from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';
class CardContainer extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      artists: this.props.artists,
      profile: false
    }; 
    this.showProfile = this.showProfile.bind(this);
  }

  showProfile = (artistProfile) => {
    this.props.showProfile(!this.state.profile, artistProfile);
  }

  render () {
    
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    const { artists } = this.state;
    return (
      <div className="CardContainerWrapper">
      <ToastContainer />
        <CardWrapper style={{fontFamily: 'Roboto Slab, serif'}}>
        {
          Object.keys(artists).map(key => 
                  <Card key={key} style={{backgroundColor:"#C0D6DF"}}>
                    <h5 onClick={() => this.showProfile(artists[key])} style={{textAlign:"center",color:"#000000",marginTop:"5%"}} >{artists[key]['artist']}</h5>
                    <div onClick={() => this.showProfile(artists[key])} style={{height: "60%", overflow: "hidden"}}><img onClick={this.toggleProfile} style={{width:"100%",padding: "2% 2%"}} src={artists[key]['image']} /></div>
                    <Button style={{backgroundColor:"#D8315B",border:"none", marginLeft:"10%",width:"80%",marginTop:"5%",marginBottom:"1%"}}> Support This Artist</Button>
                    <ReactAudioPlayer style={{marginLeft:"13%",marginTop:"1%"}}
                      src={Clip1}
                      controls
                    />
                    <SocialIcon style={{marginLeft:"20%"}} url="http://twitter.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://instagram.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://soundcloud.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://spotify.com/"/>
                  </Card>
            )
          }

        </CardWrapper>
      </div>
    );
  }
}

CardContainer.propTypes = {
  // bla: PropTypes.string,
};

CardContainer.defaultProps = {
  // bla: 'test',
};

export default CardContainer;
