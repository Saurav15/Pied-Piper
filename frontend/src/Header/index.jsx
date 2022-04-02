import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>
            <i className="fas fa-store"></i> React Practical
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown className="d-flex fa fa-circle-user" id="username">
                <li>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </li>
              </NavDropdown>

              <li>
                <Nav.Link>
                  <i className="fas fa-user"></i> Sign in
                </Nav.Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
