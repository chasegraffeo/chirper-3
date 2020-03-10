
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ChirpListItem from "./ChirpListItem";




const ChirpTimeline = props => {
  return(
    <ListGroup variant="flush">
      {props.chirps.map((chirp, i) => (
        <ChirpListItem key={`chirp-item-${i}`} chirp={chirp} />
      ))}
    </ListGroup>
    );
};

export default ChirpTimeline
