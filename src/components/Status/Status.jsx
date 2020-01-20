import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Row, Col} from 'reactstrap';
import { IoMdHeadset, IoIosMusicalNotes } from "react-icons/io";
import { FaMoneyBillWave } from 'react-icons/fa';
import AChart from '../AreaChart/AreaChart';
import './Status.css';

const data = [
  {name: 'January', Streams: 1890, Revenue: 4800, amt: 2181},
  {name: 'February', Streams: 2390, Revenue: 3800, amt: 2500},
  {name: 'March', Streams: 3490, Revenue: 4300, amt: 2100},
];

class Status extends PureComponent { 
  constructor(props) {
    super(props);
  }

  render () {
    const {username} = this.props;
    return (
      <div className="StatusWrapper">
        <div style={{marginTop:"2%",}}>
            <h3 style={{marginLeft:"5px"}}>Welcome, {username?username:"Everyone"}!</h3> 
            <Row >
              <Col >
                <div className = 'div-card row no-gutters align-items-center blue-color'>
                  <div className='mr-2'>
                    <p className='type1 text-uppercase'> Total Monthly Listens</p> 
                    <p className='value' style={{fontWeight:"bold",marginTop:"20%"}}> 120 Plays <a style={{color:"green"}}>(+50%)</a> </p> 
                  </div>
                  <IoMdHeadset className='col-auto' style={{fontSize:"400%"}}/> 
                </div>
              </Col>
              <Col >
                <div className = 'div-card row no-gutters align-items-center green-color'>
                  <div className='mr-2'>
                    <p className='type2 text-uppercase'> Total Secret Streams</p> 
                    <p className='value' style={{fontWeight:"bold",marginTop:"20%"}}> 200 Streams <a style={{color:"green"}}>(+75%)</a> </p> 
                  </div>
                  <IoIosMusicalNotes style={{fontSize:"400%"}}/>
                </div>
              </Col>
              <Col >
                <div className = 'div-card row no-gutters align-items-center other-color'>
                  <div className='mr-2'>
                    <p className='type3 text-uppercase'>Total Monthly Revenue</p> 
                    <p className='value' style={{fontWeight:"bold",marginTop:"20%"}}> $250.45 <a style={{color:"red"}}>(-20.4%)</a> </p> 
                  </div>
                  <FaMoneyBillWave style={{fontSize:"400%"}}/>
                </div>
              </Col>
            </Row>
            
            <Row>
              <div className='col-12 col-md-6'>
                <AChart 
                  title = 'Your Secret Streams'
                  data = {data}
                  dataKey = 'Streams'
                  stroke = '#8884d8'
                  fill = '#8884d8'
                />
              </div>
              <div className='col-12 col-md-6'>
                <AChart 
                  title = 'Your Revenue ($0.01s USD)'
                  data = {data}
                  dataKey = 'Revenue'
                  stroke = '#82ca9d'
                  fill = '#82ca9d'
                />
              </div>
            </Row>

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
