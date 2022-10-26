import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer-icons">
          <img
            width={120}
            height={20}
            className="client-databiz"
            src="https://github.com/kcsaiganesh/snap/raw/main/public/images/client-databiz.svg"
          ></img>
          <img
            className="client-databiz"
            src="https://github.com/kcsaiganesh/snap/raw/main/public/images/client-audiophile.svg"
          ></img>
          <img
            className="client-databiz"
            src="https://github.com/kcsaiganesh/snap/raw/main/public/images/client-meet.svg"
          ></img>
          <img
            className="client-databiz"
            src="https://github.com/kcsaiganesh/snap/raw/main/public/images/client-maker.svg"
          ></img>
        </footer>
      </div>
    );
  }
}

export default Footer;
