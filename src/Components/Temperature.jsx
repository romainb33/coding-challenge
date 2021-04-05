import React, { Component } from "react";

export class Temperature extends Component {
  state = {
    temperature: null,
    message: ["It's cold ❄️", "It's nice 🌼", "It's warm ☀️"],
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ temperature: value });
  };

  render() {
    const { temperature, message } = this.state;
    return (
      <div className="Temperature">
        <h1>Temperature</h1>
        <input
          onChange={this.handleChange}
          type="number"
          value={temperature}
          name="temperature"
        />

        {temperature <= 10 && <p style={{ color: "blue" }}>{message[0]}</p>}
        {temperature > 10 && temperature <= 30 && <p>{message[1]}</p>}
        {temperature > 30 && <p style={{ color: "red" }}>{message[2]}</p>}
      </div>
    );
  }
}

export default Temperature;
