import React from "react";
//import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import ChirpForms from "./ChirpForms";
import ChirpTimeline from "./ChirpTimeline";
let path = require('path');
let fs = require('fs');
let request = require('request');
let dataPath = path.join(__dirname, './chirp.json');


class App extends React.Component { 
    state = {
      chirps: []
    };
  

  handleChirpSubmit = chirp => {
    const newChirps = [...this.state.chirps, chirp];
    const data = JSON.stringify(newChirps);
    localStorage.setItem('chirps', data)
    this.setState({
      chirps: newChirps
    });

    fs.writeFile(dataPath, JSON.stringify(chirp)) 
  };

  

  componentDidMount() {   
     let test =localStorage.getItem('chirps');
     let demChirps = JSON.parse(test)
     setTimeout(() => {
      this.setState({ chirps:demChirps });
      }, 2000);

      
    

  }

  render() {
    if (this.state.chirps.length === 0) {
      return (
        <h1 className="text-center mt-5">
           <Spinner animation="border" variant="primary" style={{height: "100px", width: "100px"}} />
        </h1>
      )
    } else {
      return (
        <Container as="main">
          <Row className="justify-content-center mt-2">
            <Col md={6}>
              <ChirpForms handleChirpSubmit={this.handleChirpSubmit} />
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            
              <ChirpTimeline chirps={this.state.chirps} />
           
            </Row>
        </Container>
      );
    }
  }
}

export default App;

