import React from "react";
//import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChirpForms from "./ChirpForms";
import ChirpTimeline from "./ChirpTimeline";

class App extends React.Component { 
    state = {
      chirps: []
    };
  

  handleChirpSubmit = chirp => {
    this.setState({
      chirps: [...this.state.chirps, chirp]
    });
  };

  render() {
    return (
      <Container as="main">
        <Row className="mt-2">
          <Col md={5}>
            <ChirpForms handleChirpSubmit={this.handleChirpSubmit} />
          </Col>
          <Col md={7}>
            <ChirpTimeline chirps={this.state.chirps} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
