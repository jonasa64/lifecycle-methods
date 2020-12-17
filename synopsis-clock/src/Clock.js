import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="card" style={{width: "18rem;"}}>
        <div className="card-body">
          <h1 className="card-title text-center" >The time it is</h1>
          <h2 className="card-text text-center">{this.state.date.toLocaleTimeString()}</h2>
          <h2 className="card-title text-center">What does a wall clock do after it stops ticking?</h2>
          <h3 className="card-text text-center">It hangs around.</h3>
        </div>
      </div>
    );
  }
}
export default Clock;
