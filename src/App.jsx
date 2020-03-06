import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import ChirpForms from "./ChirpForms";
import ChirpTimeline from "./ChirpTimeline";
import { getChirps, setNewChirps } from "./utils/storage";

class App extends React.Component {
  state = {
    chirps: []
  };

  handleChirpSubmit = chirp => {
    const newChirps = [...this.state.chirps, chirp];
    setNewChirps(newChirps);
    this.setState({ chirps: newChirps });
  };

  componentDidMount() {
    let chirps = getChirps();
    this.setState({ chirps });
  }

  render() {
    if (this.state.chirps.length === 0) {
      return (
        <h1 className="text-center mt-5">
          <Spinner
            animation="border"
            variant="primary"
            style={{ height: "100px", width: "100px" }}
          />
        </h1>
      );
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
