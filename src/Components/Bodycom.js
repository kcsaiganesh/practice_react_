import React, { Component } from "react";
class BodyComponents extends Component {
  render() {
    return (
      <div>
        <h1 className="headink">
          Make<br></br>Remote Work
        </h1>
        <p className="desc">
          Get yout team in sync, no matter location.<br></br> Streamline
          process, create team rituals and<br></br>watch productivity soar
        </p>
        <img
          className="hero-desktop"
          src="https://github.com/kcsaiganesh/snap/raw/main/public/images/image-hero-desktop.png"
        ></img>
        <li>
          <a className="btn" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Learn More
          </a>
        </li>
      </div>
    );
  }
}
export default BodyComponents;
