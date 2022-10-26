import React, { Component } from "react";
import "./Background.css";
import Footer from "../Footer/Footer";

class Background extends Component {
  render() {
    return (
      <div>
        <h1 className="headink">
          Make<br></br>remote work
        </h1>
        <p className="desc">
          Get yout team in sync, no matter location.<br></br> Streamline
          process, create team rituals and<br></br>watch productivity soar
        </p>
        <img
          width={350}
          height={420}
          className="hero-desktop"
          src="https://github.com/kcsaiganesh/snap/raw/main/public/images/image-hero-desktop.png"
        ></img>
        <li>
          <a
            className="btn-learnmore"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            Learn More
          </a>
        </li>
        <Footer />
      </div>
    );
  }
}
export default Background;
