import React from 'react';
import styled from 'styled-components';
import logo from './3cLogo.png';

const Header = styled.header`
  background-color: skyblue;
  display: flex;
  
`;

const Title = styled.h1`
  /* display: inline-block; */
  text-align: left;
  margin-bottom: 0;
  padding-left: 17px;
`;

const UnsereMarke = styled.div`
width:50%;
`;

const UnserLogo = styled.div`
  width: 50%;
  img {
    position: relative;
    top: 18%;
    float: right;
    cursor: pointer;
    mix-blend-mode: multiply;
    height: 6rem;
    width: auto;
  }
`;

export default function HeaderTitle() {
  // const [initView, setInitView] = useState(document.getElementById('root'));

  return (
    <Header fluid className='bg-primary' >
      <UnsereMarke>
        <Title>
          CODE
          <br />
          CYPHER
          <br />
          COLOGNE
        </Title>
      </UnsereMarke>
      <UnserLogo>
        <img
          src={`${logo}`}
        />
      </UnserLogo>
    </Header>    
  );
}