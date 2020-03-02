import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaFeather } from "react-icons/fa";

class ChirpForms extends React.Component {
  state = {
    username: "",
    message: ""
  };

  handleUsernameChange = e => this.setState({ username: e.target.value });
  handleMessageChange = e => this.setState({ message: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleChirpSubmit( {
        username: this.state.username,
        message: this.state.message
    });        
    this.setState({
      username: "",
      message: ""
    });
  };

  render() {
    return (
      <Form className="form-group p-3 shadow-lrg">
        <Form.Label>Username</Form.Label>
        <Form.Control
          value={this.state.username}
          onChange={this.handleUsernameChange}
          type="text"
        />
        <Form.Label>Message</Form.Label>
        <br />
        <Form.Control
          as="textarea"
          value={this.state.message}
          onChange={this.handleMessageChange}
          rows={7}
        />
        <Button
          variant="primary"
          onClick={this.handleSubmit}
          className="mt-3 d-flex align-item-center justify-content-center"
        >
          <FaFeather className="mx-1" />
          <span className="mx-1"></span>
          Chirp It!
        </Button>
      </Form>
    
      
    );
  }
}
export default ChirpForms;
