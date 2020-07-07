import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './3cLogo.png';
import { BeonStyle } from './stuff/globalFont';

//BOOTIESTRAP Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const imgStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '10vh',
  width: 'auto',
  padding: '10px 0px',
  borderRadius: '35px',
}

const Title = styled.h1`
  text-align: left;
`;

export default function Header() {
  return (
    <Container fluid className="bg-primary" style={{position: 'fixed',}}>
      <BeonStyle />
      <Row>
        <Col>
          <Title>
          CODE<br />CYPHER<br />COLOGNE
          </Title>
        </Col>
        <Col>
          <Image src= {`${logo}`} fluid style={imgStyle}/>
        </Col>
      </Row>
    </Container>
  );
}