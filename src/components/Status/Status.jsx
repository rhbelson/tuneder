import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
//import { Test } from './Status.styles';
import { Row, Col} from 'reactstrap';
import { IoMdHeadset, IoIosMusicalNotes } from "react-icons/io";
import { FaMoneyBillWave } from 'react-icons/fa';
import './Status.css'

import AChart from '../AreaChart/AreaChart';
class Status extends PureComponent { 
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
      <div className="StatusWrapper">
        <div style={{marginTop:"2%",fontFamily: 'Roboto Slab, serif',backgroundColor:"#F6F5AE"}}>
            <h3 style={{marginLeft:"5px"}}>Welcome, {this.state.username}!</h3> 
            <Row style={{marginLeft:"5px"}}>
            <Col>
            <IoMdHeadset style={{fontSize:"400%"}}/> 
              <h5> Total Monthly Listens</h5> 
              <h4 style={{fontWeight:"bold",marginTop:"20%"}}> 120 Plays <a href="#" style={{color:"green"}}>(+50%)</a> </h4> 
            </Col>
            
            <Col>
            <IoIosMusicalNotes style={{fontSize:"400%"}}/>
              <h5> Total Secret Streams</h5> 
              <h4 style={{fontWeight:"bold",marginTop:"20%"}}> 200 Streams <a href="#" style={{color:"green"}}>(+75%)</a></h4> 
            </Col>

            <Col>
            <FaMoneyBillWave style={{fontSize:"400%"}}/> 
              <h5>Total Monthly Revenue</h5> 
              <h4 style={{fontWeight:"bold",marginTop:"20%"}}> $250.45 <a href="#" style={{color:"red"}}>(-20.4%) </a></h4> 
            </Col>
            </Row>
            
            <div style={{marginLeft:"5%",marginTop:"5%"}}>
              <AChart/>
            </div>

          </div>
      </div>
    );
  }
}

Status.propTypes = {
  // bla: PropTypes.string,
};

Status.defaultProps = {
  // bla: 'test',
};

export default Status;
