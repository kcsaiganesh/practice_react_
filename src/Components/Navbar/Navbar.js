import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

let arr = ["Features", "Company"];
const list = arr.map((title) => <p>{title}</p>);

class NavbarMenu extends React.Component {
  render() {
    return (
      <div>
        <Navbar variant="success" expand="lg">
          <Container fluid>
            <img
              className="logo"
              src="https://github.com/kcsaiganesh/snap/raw/main/public/images/logo.svg"
            ></img>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav className="nav">
                <NavDropdown title="Features">
                  <NavDropdown.Item href="#action/3.1">
                    <img src="https://github.com/kcsaiganesh/snap/raw/main/public/images/icon-todo.svg"></img>
                    Todo List
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <img src="https://github.com/kcsaiganesh/snap/raw/main/public/images/icon-calendar.svg"></img>
                    Calender
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <img src="https://github.com/kcsaiganesh/snap/raw/main/public/images/icon-reminders.svg"></img>
                    Reminder
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <img src="https://github.com/kcsaiganesh/snap/raw/main/public/images/icon-planning.svg"></img>
                    planning
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="nav">
                <NavDropdown title="Company">
                  <NavDropdown.Item href="#action/3.1">
                    History
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Our Teams
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="carr">
                <NavDropdown.Item href="">Careers</NavDropdown.Item>
              </Nav>
              <Nav className="abt">
                <NavDropdown.Item href="">About</NavDropdown.Item>
              </Nav>
              <Nav>
                <NavDropdown.Item className="login" href="">
                  Login
                </NavDropdown.Item>
              </Nav>
              <li>
                <a
                  className="btn-register"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                >
                  Register
                </a>
              </li>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMenu;
