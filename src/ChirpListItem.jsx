import React from "react";
import {FaUserAlt} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';

const ChirpListItem = props => {
  return (
    <ListGroup.Item
     
      className="my-2 d-flex justify-content-between align-itmemss-center"
    >
      <b>
        <FaUserAlt size="2rem" className="border rounded-circle border-dark" />
        {props.chirp.username}:
      </b>
      <span>{props.chirp.message}</span>
    </ListGroup.Item>
  );
};
export default ChirpListItem