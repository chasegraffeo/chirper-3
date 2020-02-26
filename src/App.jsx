import React from "react";
//import "./App.css";
import { FaFeather } from "react-icons/fa";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.stat = {
      username: "",
      message: "",
      chirps: []
    };
  }

  handleUsernameChange = e => this.setState({ username: e.target.value });
  handleMesassageChange = e => this.setState({ message: e.target.value });
  handleChirpSubmit = e => {
    e.preventDefault();
    this.setState({
      username: "",
      massage: "",
      chirps: [
        ...this.state.chirps,
        {
          message: this.state.username,
          message: this.state.massage
        }
      ]
    });
  };

  render() {
    return (
      <main className="container">
        <section className="row mt-2">
          <div className="col-md-4">
            <form classname="form-group p-3 shadow-sm">
              <label>Username</label>
              <input
                value={this.state.username}
                onChange={this.handleUsernameChange}
                type="text"
                className="form-control"
              />
              <label>message</label>
              <textarea
                value={this.state.message}
                onChange={this.handleMesassageChange}
                classname="form-control"
                rows={7}
              />
              <button
                onClick={this.handleChirpSubmit}
                className="btn btn-primary btn-block mt-3 d-flex align-iutem-center justify-content-center"
              >
                <FaFeather className="mx-1" />
                <span className="mx-1"></span>
                Chirp It!
              </button>
            </form>
          </div>
          <div className="col-md-7">
            <ul className="list-group list-group-flush shadow-sm">
              {this.state.chirps.map((chirp, i) => {
                return (
                  <li key={`chirp-item-${i}`} className="list-group-item d-flex justify-content-between align-itmemss-center">
                    <b>{chirp.username}</b>
                <span>{chirp.message}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
