import React from "react";

import ChirpCard from "./ChirpCard";



const ChirpTimeline = props => {
    return(
      <>
    {props.chirps.reverse().map((chirp, i) => (
      <ChirpCard key={`chirp-item-${i}`} chirp={chirp} />
    ))}
    </>  
    );
};

export default ChirpTimeline
