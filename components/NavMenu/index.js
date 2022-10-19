import React from 'react';
import Link from 'next/link'
import * as bs from 'bootstrap/dist/css/bootstrap.css'
import navMenu from '../../public/scss/navMenu.module.scss'
import { NavDropdown , Nav , Navbar, Container} from 'react-bootstrap'

export function NavMenu() {
  return (
    <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Algorithms</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Navbar.Text>
                <Link href="/">
                  <a style={{ textDecoration: 'none' }}>Home</a>
                </Link>
                </Navbar.Text>
                <Navbar.Text>
                <Link href="/Community">
                  <a style={{ marginLeft: '10px' , textDecoration: 'none' }}>Community</a>
                </Link>
                </Navbar.Text>
                <NavDropdown title="Account" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/settings">
                    Settings
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  );
}