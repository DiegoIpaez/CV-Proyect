import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="navbar-home" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="url-tdn" to="/">
            <span className="logo-text font-weight-bold">
              <i className="fab fa-dyalog fa-lg ps-1 pe-2"></i> Diego Paez
            </span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {/* <Nav.Link className="text-white">
              <div className="btn-github">
              <i className="fab fa-github"></i> GitHub</div>
            </Nav.Link> */}
            <Nav.Link>
              <Link className="url-tdn text-white" to="/myproyects">
                <div className="myProyectsBtn">
                  <i className="fas fa-clipboard"></i>
                  <span className="ps-1">My Proyects</span>
                </div>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
