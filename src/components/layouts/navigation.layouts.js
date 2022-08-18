import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./../stylesheets/navbar.css";

const Navigation = ({ siteTitle }) => {
  const logo =
    "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png";

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} style={{ height: "35px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link
                className="nav-link"
                activeClassName="active"
                as={Link}
                eventKey="albums"
                to="/albums"
              >
                Images
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="nav-link"
                activeClassName="active"
                as={Link}
                eventKey="posts"
                to="/posts"
              >
                Posts
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
