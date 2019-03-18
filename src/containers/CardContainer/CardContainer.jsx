import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
//import { Test } from './CardContainer.styles';
import { ToastContainer } from 'react-toastify';
import { Card, CardWrapper } from 'react-swipeable-cards';
import ReactAudioPlayer from 'react-audio-player';
import { Button } from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';
import './CardContainer.css'
class CardContainer extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      artists: [],
      artistCard: [],
      profile: false,
      startCard: 0,

    }; 
    this.showProfile = this.showProfile.bind(this);
  }

  componentDidMount() {
    
    let artists = this.props.artists;
    // let length = Object.keys(artists).length;
    let artistCard = [];
    for(var i = this.state.startCard; i< this.state.startCard + 5 ;i++) {
      artistCard.push(artists[Object.keys(artists)[i]]);
    }
    // console.log("nextProps==",artistCard[0]['artist']);
    // console.log("nextProps==",artists);
    this.setState({
      artists: artists,
      artistCard: artistCard
    })
  }
  showProfile = (artistProfile) => {
    this.props.showProfile(!this.state.profile, artistProfile);
  }

  onSwipe() {
    let artists = this.state.artists;
    let artistCard = [];
    for(var i = this.state.startCard + 1; i< this.state.startCard + 6 ;i++) {
      artistCard.push(artists[Object.keys(artists)[i]]);
    }
    // console.log("artistCard===",artistCard)
    this.setState({
      startCard:this.state.startCard + 1,
      artistCard: artistCard
    })
    
  }

  render () {
    
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    const { artistCard } = this.state;
    console.log(artistCard);
    return (
      <div className="CardContainerWrapper">
      <ToastContainer />
      <CardWrapper id="artistCard" className="artistCard" style={{fontFamily: 'Roboto Slab, serif'}}>
      {
        artistCard.map(artist => 
                <Card key={artist.artist} onSwipe={this.onSwipe.bind(this)} style={{backgroundColor:"#C0D6DF"}}>
                  <h5 onClick={() => this.showProfile(artist)} style={{textAlign:"center",color:"#000000",marginTop:"10%"}} >{artist['artist']}</h5>
                  <div onClick={() => this.showProfile(artist)} style={{height: "50%", overflow: "hidden"}}><img onClick={this.toggleProfile} style={{width:"100%",padding: "2% 2%"}} src={artist['image']} /></div>
                  <Button style={{backgroundColor:"#D8315B",border:"none", marginLeft:"10%",width:"80%",marginTop:"5%",marginBottom:"1%"}}> Support This Artist</Button>
                  <ReactAudioPlayer style={{marginLeft:"12%",marginTop:"1%"}}
                    src={artist['clip']}
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
