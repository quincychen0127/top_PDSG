import React, { Component } from "react"

class Background extends Component {
  render() {
    return (
      <div id="image" className="bkg">
        <img
          alt=""
          id="background"
          src={require("../asset/EntryBackground.jpg")}
        />
      </div>
    );
  }
}

export default Background;
