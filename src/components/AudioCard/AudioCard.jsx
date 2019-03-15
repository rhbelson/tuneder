import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './AudioCard.styles';

class AudioCard extends PureComponent { 
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
      <div className="AudioCardWrapper">
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
      </div>
    );
  }
}

AudioCard.propTypes = {
  // bla: PropTypes.string,
};

AudioCard.defaultProps = {
  // bla: 'test',
};

export default AudioCard;
