import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './3cLogo.png';
import { BeonStyle } from './stuff/globalFont';
import Navigation from './navigation/navBar';

//BOOTIESTRAP Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const imgStyle = {
  position: 'absolute',
  height: '125%',
  top: '-15px',
  // width: 'auto',
  // padding: '10px 0px',
  borderRadius: '5px',
  cursor: 'pointer',
  mixBlendMode: 'multiply',
  marginRight: '10px',
};

const Title = styled.h1`
  text-align: left;
`;

const initView = document.getElementById('root');

export default function Header() {
  // const [initView, setInitView] = useState(document.getElementById('root'));

  return (
    <header style={{ position: 'sticky', top: '0', }}>
      <Container fluid className='bg-primary' >
        <BeonStyle />
        <Row>
          <Col>
            <Title>
              CODE
              <br />
              CYPHER
              <br />
              COLOGNE
            </Title>
          </Col>
          <Col>
            <Image
              src={`${logo}`}
              fluid
              style={imgStyle}
              onClick={() => {
                initView.scrollIntoView(true);
              }}
            />
          </Col>
        </Row>
      </Container>
      <Navigation />
    </header>
  );
}
