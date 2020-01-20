import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './CardContainer.styles';
import { ToastContainer, toast } from 'react-toastify';
import { Card, CardWrapper } from 'react-swipeable-cards';
import Pic1 from "../../assets/images/NONAME.jpg";
import Pic2 from "../../assets/images/LAVANGOGH.jpg";
import Pic3 from "../../assets/images/JEANDEAUX.jpg";
import Pic4 from "../../assets/images/NESSHEADS.png";
import Pic5 from "../../assets/images/OMARAPOLLO.jpg";
import Pic6 from "../../assets/images/SENMORIMOTO.jpg";
import Pic7 from "../../assets/images/TULANI.jpg";
import ReactAudioPlayer from 'react-audio-player';
import Clip1 from "../../assets/musics/Noname_clip.mp3";
import Clip2 from "../../assets/musics/Gogh_clip.mp3";
import Clip3 from "../../assets/musics/Deaux_clip.mp3";
import Clip4 from "../../assets/musics/NessHeads_clip.mp3";
import Clip5 from "../../assets/musics/Apollo_clip.mp3";
import Clip6 from "../../assets/musics/Morimoto_clip.mp3";
import Clip7 from "../../assets/musics/tulani_clip.mp3";
import { Button } from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import Profile from '../../components/Profile/Profile';

const data = [
  {
    name: 'No Name', 
    imgSrc: Pic1, 
    descripton: 'Support This Artist', 
    clipSrc: Clip1, 
    linkTwitter:"http://twitter.com/", 
    linkInstagram :"http://instagram.com",
    linkSoundCloud : "http://soundcloud.com",
    linkSpotify: "http://spotify.com/",
    Bio: "Chai Tulani was born in Nakuru, Kenya and raised in Chicago, IL. Though Tulani moved to the states at only four years old, his culture remains one of the main ingredients of his music. Known for his raspy but soulful voice, Tulani creates a wide variety of music merging genres like reggae, soul, Afro beat and hip-hop.",
  },
  {
    name: 'LAVANGOGH', 
    imgSrc: Pic2, 
    descripton: 'Support This Artist', 
    clipSrc: Clip2, 
    linkTwitter:"http://twitter.com/", 
    linkInstagram :"http://instagram.com",
    linkSoundCloud : "http://soundcloud.com",
    linkSpotify: "http://spotify.com/",
    Bio: "Chai Tulani was born in Nakuru, Kenya and raised in Chicago, IL. Though Tulani moved to the states at only four years old, his culture remains one of the main ingredients of his music. Known for his raspy but soulful voice, Tulani creates a wide variety of music merging genres like reggae, soul, Afro beat and hip-hop.",
  },
  {
    name: 'JEANDEAUX', 
    imgSrc: Pic3, 
    descripton: 'Support This Artist', 
    clipSrc: Clip3, 
    linkTwitter:"http://twitter.com/", 
    linkInstagram :"http://instagram.com",
    linkSoundCloud : "http://soundcloud.com",
    linkSpotify: "http://spotify.com/",
    Bio: "Chai Tulani was born in Nakuru, Kenya and raised in Chicago, IL. Though Tulani moved to the states at only four years old, his culture remains one of the main ingredients of his music. Known for his raspy but soulful voice, Tulani creates a wide variety of music merging genres like reggae, soul, Afro beat and hip-hop.",
  },
  {
    name: 'NESSHEADS', 
    imgSrc: Pic4, 
    descripton: 'Support This Artist', 
    clipSrc: Clip4, 
    linkTwitter:"http://twitter.com/", 
    linkInstagram :"http://instagram.com",
    linkSoundCloud : "http://soundcloud.com",
    linkSpotify: "http://spotify.com/",
    Bio: "Chai Tulani was born in Nakuru, Kenya and raised in Chicago, IL. Though Tulani moved to the states at only four years old, his culture remains one of the main ingredients of his music. Known for his raspy but soulful voice, Tulani creates a wide variety of music merging genres like reggae, soul, Afro beat and hip-hop.",
  }      
]


class CardContainer extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      modal : false,
    }; 
  }
  toggleProfile = () => {
    this.setState({modal: !this.state.modal});
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="CardContainerWrapper main">
      <ToastContainer />
        <CardWrapper style={{fontFamily: 'Roboto Slab, serif'}}>
          {
            data.map((item,index) => <ArtistCard key = {index} data = {item} /> )
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
