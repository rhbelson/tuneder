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
class CardContainer extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      artists: this.props.artists
    }; 
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
                  <Card style={{backgroundColor:"#C0D6DF"}}>
                    <h5 style={{textAlign:"center",color:"#000000",marginTop:"5%"}} >{artists[key]['artist']}</h5>
                    <div style={{height: "60%", overflow: "hidden"}}><img onClick={this.toggleProfile} style={{width:"100%",padding: "2% 2%"}} src={artists[key]['image']} /></div>
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
