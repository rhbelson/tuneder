import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Profile.styles';
import { Button, Modal, ModalHeader, ModalBody, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { IoIosMusicalNote,  } from "react-icons/io";
import Pic7 from '../../assets/images/artist7.jpg';
class Profile extends PureComponent { 
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
      <div className="ProfileWrapper">
        <Modal isOpen={this.state.modal}>
          <ModalHeader toggle={this.toggleProfile}></ModalHeader>
          <ModalBody>

              <CardImg top style={{width:"100%"}} src={Pic7}  />
              <CardBody>
                 <CardTitle style={{textAlign:"left",fontWeight:"bold",fontSize:"20px"}}>Chai Tulani</CardTitle>
                 <CardSubtitle style={{fontSize:"20px"}}><IoIosMusicalNote/>Artist</CardSubtitle>
                <CardText>
                  <p style={{marginTop:"5%"}}>Chai Tulani was born in Nakuru, Kenya and raised in Chicago, IL. Though Tulani moved to the states at only four years old, his culture remains one of the main ingredients of his music. Known for his raspy but soulful voice, Tulani creates a wide variety of music merging genres like reggae, soul, Afro beat and hip-hop.</p>
                  <a style={{fontWeight:"bold"}}>Genre: </a><a>Afrobeat, hip-hop, pop</a><br/>
                  <a style={{fontWeight:"bold"}}>Next Show Near You: </a>
                  <a>TBD </a>
                </CardText>
                <Button href='https://mail.google.com/mail/?view=cm&fs=1&to=chaitulanimanagment@gmail.com&su=Crescendo+User+Inquiry&body=Thank+you+for+choosing+Crescendo!' style={{width:"100%"}}>Contact Tulani</Button>
              </CardBody>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Profile;