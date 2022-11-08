import React from "react";
import "../../assets/styles/Navigation.scss";
import { NavigationBar } from "../store/index";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {NavigationBar.map((e, id) => (
              <NavDropdown key={id} title={e.title} id="basic-nav-dropdown">
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.1">{e.text}</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
