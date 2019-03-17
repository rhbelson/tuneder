import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Profile.styles';
import { Button, Modal, ModalHeader, ModalBody, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { IoIosMusicalNote,  } from "react-icons/io";

class Profile extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      modal:this.props.modal,
      artistProfile:this.props.artistProfile
    };
  }

  toggleProfile = () => {
    this.props.closeProfile(!this.state.modal);
    this.setState({modal: !this.state.modal});
  }
  
  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    const { artistProfile } = this.state
  
    return (
      <div className="ProfileWrapper">
        <Modal isOpen={this.state.modal}>
          <ModalHeader toggle={this.toggleProfile}></ModalHeader>
          <ModalBody>

              <CardImg top style={{width:"100%"}} src={artistProfile['image']}  />
              <CardBody>
                 <CardTitle style={{textAlign:"left",fontWeight:"bold",fontSize:"20px"}}>{artistProfile['artist']}</CardTitle>
                 <CardSubtitle style={{fontSize:"20px"}}><IoIosMusicalNote/>Artist</CardSubtitle>
                <CardText>
                  <p style={{marginTop:"5%"}}>{artistProfile['bio']}</p>
                  <a style={{fontWeight:"bold"}}>Genre: </a><a>{artistProfile['genre_tags']}</a><br/>
                  <a style={{fontWeight:"bold"}}>Next Show Near You: </a>
                  <a>TBD </a>
                </CardText>
                <Button href={'https://mail.google.com/mail/?view=cm&fs=1&to=' + artistProfile['contact'] + '&su=Crescendo+User+Inquiry&body=Thank+you+for+choosing+Crescendo!'} style={{width:"100%"}}>Contact {artistProfile['artist']}</Button>              
              </CardBody>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Profile;
