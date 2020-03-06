import React from "react";
import {FaRebel} from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const ChirpCard = props => {
  return (
    <Col md={8}>
    <Card className="my-2 shadow" bg="warning" >
    <Card.Header><FaRebel></FaRebel>{props.chirp.username}:</Card.Header>
    <Card.Body>
      <Card.Text as="div">
       {props.chirp.message.split('\n').map((item, i) => (
         <div key={`${item}.${i}`}>
           {item}
           <br/>
         </div>
       ))}
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  );
};
export default ChirpCard

{/* <ListGroup.Item
     
     className="my-2 d-flex justify-content-between align-itmemss-center"
   >
     <b>
       <FaRebel size="2rem" className="border rounded-circle border-dark" />
       {props.chirp.username}:
     </b>
     <span>{props.chirp.message}</span>
   </ListGroup.Item> */}