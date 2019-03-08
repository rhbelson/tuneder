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
    }; 
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="CardContainerWrapper">
      <ToastContainer />
        <CardWrapper style={{fontFamily: 'Roboto Slab, serif'}}>
            <Card style={{backgroundColor:"#C0D6DF"}}>
              <h5 style={{textAlign:"center",color:"#000000",marginTop:"5%"}} >NONAME</h5>
              <img onClick={this.toggleProfile} style={{height:"50%",marginLeft:"2%",marginTop:"2%"}} src={Pic1}/>
              <Button style={{backgroundColor:"#D8315B",border:"none", marginLeft:"10%",width:"80%",marginTop:"5%",marginBottom:"1%"}}> Support This Artist</Button>
              <ReactAudioPlayer style={{marginLeft:"13%",marginTop:"1%"}}
                src={Clip1}
                controls
              />
              <SocialIcon style={{marginLeft:"20%"}} url="http://twitter.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://instagram.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://soundcloud.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://spotify.com/"/>
            </Card>

            <Card onSwipe={this.renderNoMoreCards} style={{backgroundColor:"#C0D6DF"}}>
              <h5 style={{textAlign:"center",color:"#000000",marginTop:"5%"}} >TULANI</h5>
              <img onClick={this.toggleProfile} style={{height:"50%",marginLeft:"2%",marginTop:"2%"}} src={Pic7}/>
              <Button onClick={this.notify} color="danger" style={{backgroundColor:"#D8315B",border:"none", marginLeft:"10%",width:"80%",marginTop:"5%",marginBottom:"5%"}}> Support This Artist</Button>
               <ReactAudioPlayer style={{marginLeft:"13%",marginTop:"1%"}}
                src={Clip7}
                controls
              />
               <SocialIcon style={{marginLeft:"20%"}} url="http://twitter.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://instagram.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://soundcloud.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://spotify.com/"/>
            </Card>

            <Card style={{backgroundColor:"#C0D6DF"}}>
              <h5 style={{textAlign:"center",color:"#000000",marginTop:"5%"}} >L.A. VanGogh</h5>
              <img style={{height:"50%",marginLeft:"2%",marginTop:"2%"}} src={Pic2 }/>
              <Button onClick={this.notify} color="danger" style={{backgroundColor:"#D8315B",border:"none", marginLeft:"10%",width:"80%",marginTop:"5%",marginBottom:"1%"}}> Support This Artist</Button>
               <ReactAudioPlayer style={{marginLeft:"13%"}}
                src={Clip2}
                controls
              />
               <SocialIcon style={{marginLeft:"20%"}} url="http://twitter.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://instagram.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://soundcloud.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://spotify.com/"/>
            </Card>

            <Card style={{backgroundColor:"#C0D6DF"}}>
              <h5 style={{textAlign:"center",color:"#000000",marginTop:"5%"}} >Jean Deaux</h5>
              <img style={{height:"50%",marginLeft:"10%",marginTop:"2%"}} src={Pic3}/>
              <Button onClick={this.notify} color="danger" style={{backgroundColor:"#D8315B",border:"none", marginLeft:"10%",width:"80%",marginTop:"5%",marginBottom:"5%"}}> Support This Artist</Button>
               <ReactAudioPlayer style={{marginLeft:"13%"}}
                src={Clip3}
                controls
              />
               <SocialIcon style={{marginLeft:"20%"}} url="http://twitter.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://instagram.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://soundcloud.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://spotify.com/"/>
            </Card>

            <Card style={{backgroundColor:"#C0D6DF"}}>
              <h5 style={{textAlign:"center",color:"#000000",marginTop:"5%"}} >NESS HEADS</h5>
              <img style={{height:"50%",marginLeft:"2%",marginTop:"2%"}} src={Pic4}/>
              <Button onClick={this.notify} color="danger" style={{backgroundColor:"#D8315B",border:"none", marginLeft:"10%",width:"80%",marginTop:"5%",marginBottom:"5%"}}> Support This Artist</Button>
               <SocialIcon style={{marginLeft:"20%"}} url="http://twitter.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://instagram.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://soundcloud.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://spotify.com/"/>
                <ReactAudioPlayer style={{marginLeft:"13%"}}
                src={Clip4}
                controls
              />
            </Card>

            <Card style={{backgroundColor:"#C0D6DF"}}>
              <h5 style={{textAlign:"center",color:"#000000",marginTop:"5%"}} >OMAR APOLLO</h5>
              <img style={{height:"50%",marginLeft:"2%",marginTop:"2%"}} src={Pic5}/>
              <Button onClick={this.notify} color="danger" style={{backgroundColor:"#D8315B",border:"none", marginLeft:"10%",width:"80%",marginTop:"5%",marginBottom:"5%"}}> Support This Artist</Button>
               <SocialIcon style={{marginLeft:"20%"}} url="http://twitter.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://instagram.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://soundcloud.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://spotify.com/"/>
              <ReactAudioPlayer style={{marginLeft:"13%"}}
                src={Clip5}
                controls
              />
            </Card>

            <Card style={{backgroundColor:"#C0D6DF"}}>
              <h5 style={{textAlign:"center",color:"#000000",marginTop:"5%"}} >SEN MORIMOTO</h5>
              <img style={{height:"50%",marginLeft:"22%",marginTop:"2%"}} src={Pic6}/>
              <Button onClick={this.notify} color="danger" style={{backgroundColor:"#D8315B",border:"none", marginLeft:"10%",width:"80%",marginTop:"5%",marginBottom:"5%"}}> Support This Artist</Button>
               <SocialIcon style={{marginLeft:"20%"}} url="http://twitter.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://instagram.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://soundcloud.com/"/><SocialIcon style={{marginLeft:"2%"}} url="http://spotify.com/"/>
              <ReactAudioPlayer style={{marginLeft:"13%"}}
                src={Clip6}
                controls
              />
            </Card>

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
