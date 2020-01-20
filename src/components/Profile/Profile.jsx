import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Profile.styles';
import { Button, Modal, ModalHeader, ModalBody, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { IoIosMusicalNote,  } from "react-icons/io";
import Pic7 from '../../assets/images/artist7.jpg';
class Profile extends PureComponent { 
  constructor(props) {
    super(props);
    this.state = {modal: props.modal};
  }
  toggleProfile = () => {
    this.setState({modal: !this.state.modal});
  }
  render () {
    const {data} = this.props;
    console.log(data);
    return (
      <div className="ProfileWrapper">
        <Modal isOpen={this.props.modal}>
          <ModalHeader toggle={this.props.toggleProfile}></ModalHeader>
          <ModalBody>
              <CardImg top style={{width:"100%"}} src={data.imgSrc}  />
              <CardBody>
                 <CardTitle style={{textAlign:"left",fontWeight:"bold",fontSize:"20px"}}>{data.name}</CardTitle>
                 <CardSubtitle style={{fontSize:"20px"}}><IoIosMusicalNote/>Artist</CardSubtitle>
                <CardText>
                  <p style={{marginTop:"5%"}}>{data.Bio}</p>
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
