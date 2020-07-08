import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function whoWeAre() {
  console.log('we are gayyyyyyyyyyyyyyy');
}

const verticalDivider = {
  'borderLeft': '6px solid white',
  'display': '100px', 
}

export default function Navigation() {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="https://duckduckgo.com/?q=learn+to+code&t=lm&ia=web" target="_blank">coden lernen</Navbar.Brand>
        <Nav className="d-inline-flex">
          <Nav.Link onClick={whoWeAre}>Über uns</Nav.Link>
          <div style= {verticalDivider}></div>
          <Nav.Link onClick={whoWeAre}>code cypher cologne Projekt</Nav.Link>
          <div style= {verticalDivider}></div>
          <Nav.Link onClick={whoWeAre}>Anmeldung</Nav.Link>
          <div style= {verticalDivider}></div>
          <Nav.Link onClick={whoWeAre}>Kontakt</Nav.Link>
          <Nav.Link onClick={whoWeAre} style={{marginLeft:'40px',}} >Impressum</Nav.Link>
        </Nav>        
      </Navbar>
    </>
  );
}