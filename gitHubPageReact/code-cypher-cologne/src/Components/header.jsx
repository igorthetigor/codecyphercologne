import React from 'react';
import styled from 'styled-components';
import logo from './3cLogo.png';


const imgStyle = {
  // position: 'absolute',
  // height: '15%',
  // top: '-15px',
  // width: 'auto',
  // padding: '10px 0px',
  height: '5rem',
  width: 'auto',
  borderRadius: '5px',
  cursor: 'pointer',
  mixBlendMode: 'multiply',
  marginRight: '10px',
};

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

const initView = document.getElementById('root');

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
          onClick={() => {
            initView.scrollIntoView(true);
          }}
        />
      </UnserLogo>
    </Header>    
  );
}