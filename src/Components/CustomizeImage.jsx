import React, { Component } from "react";

export class CustomizeImage extends Component {
  state = {
    url: null,
    size: 10,
  };

  handleSubmit = (event) => {
    const { value } = event.target;
    this.setState({ url: value });
  };
  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ size: value });
  };

  render() {
    const { url, size } = this.state;
    console.log(url);
    return (
      <div className="CustomizeImage">
        <h1>Customize Image</h1>

        <input
          onChange={this.handleSubmit}
          type="text"
          value={url}
          name="url"
        />
        <input
          onChange={this.handleChange}
          type="range"
          name="size"
          id="size"
          value={size}
        />

        {url && <img style={{ width: `${size}%` }} src={url} alt="image" />}
      </div>
    );
  }
}

export default CustomizeImage;
