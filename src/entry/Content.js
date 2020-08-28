import React, { Component } from "react"

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    }
  }

  show = () => {
    this.setState({display: !this.state.display});
  }

  close = () => {
    this.setState({display: !this.state.display});
  }

  Tips = () => (
    <div id="truck" className="hid">
      <h3>TRUCK ESCAPEES</h3>
      <p>
        Sometimes plastic items fall off the back of garbage or recycling
        trucks and become litter...
      </p>
      <button className="tick-button" 
        onClick={this.close}
      >
        <img 
          alt=""
          className="tick" 
        />
      </button>
    </div>
  )

  render() {
    console.log(this.state.display);
    return (
      <div className="content">
        <div
          id="truck-escapees"
          className="icon"
          onClick={this.show}
        >
          <img
            alt=""
            className="icon-img"
            src={require("../asset/TruckEscapees.png")}
          />
        </div>
        {this.state.display ? this.Tips() : null }
        <div id="fugitive-recycling" className="icon">
          <img
            alt=""
            className="icon-img"
            src={require("../asset/FugitiveRecycling.png")}
          />
        </div>
        <div id="nurdles" className="icon">
          <img
            alt=""
            className="icon-img"
            src={require("../asset/Nurdles.png")}
          />
        </div>
        <div id="clothing-fibers" className="icon">
          <img
            alt=""
            className="icon-img"
            src={require("../asset/ClothingFibers.png")}
          />
        </div>
        <div id="road-run-off" className="icon">
          <img
            alt=""
            className="icon-img"
            src={require("../asset/RoadRunOff.png")}
          />
        </div>
        <div id="sewage" className="icon">
          <img
            alt=""
            className="icon-img"
            src={require("../asset/Sewage.png")}
          />
        </div>
        <div id="litter" className="icon">
          <img
            alt=""
            className="icon-img"
            src={require("../asset/Litter.png")}
          />
        </div>
        <div id="blown-by-the-wind" className="icon">
          <img
            alt=""
            className="icon-img"
            src={require("../asset/BlownByTheWind.png")}
          />
        </div>
        <div id="beach-clean" className="icon">
          <img
            alt=""
            className="icon-img"
            src={require("../asset/BeachClean.png")}
          />
        </div>
        <div id="fact1" className="facts">
          <h2>Fact #1</h2>
        </div>
        <div id="fact2" className="facts">
          <h2>Fact #2</h2>
        </div>
        <div id="fact3" className="facts">
          <h2>Fact #3</h2>
        </div>
        <button id="next" href="#next-page">
          <h4>
            Got it! <br />
            Now, show me where my plastics go!
          </h4>
        </button>
      </div>
    );
  }
}

export default Content;
