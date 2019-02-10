import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';


class Header extends Component {
  render() {
    return (
        <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
