import React, { useState } from 'react';
import styled from 'styled-components';
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

const initView = document.getElementById('root');

export default function Header() {

  // const [initView, setInitView] = useState(document.getElementById('root'));
  
  return (
    <Container fluid className="bg-primary" style={{position: 'sticky', top: '0',}}>
      <BeonStyle />
      <Row>
        <Col>
          <Title>
          CODE<br />CYPHER<br />COLOGNE
          </Title>
        </Col>
        <Col>
          <Image src= {`${logo}`} fluid style={imgStyle} onClick={()=> {initView.scrollIntoView(true)}} />
        </Col>
      </Row>
    </Container>
  );
}