import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
background-color: black;
scroll-margin-top: 30px;
border-top: 8px solid #FF1717;
`;

const AboutAbout = styled.p`
text-align: center;
padding-left: 12px;
padding-right: 12px;
`;

function About() {
  return(
    <>
      <Title id='aboutView'>
        About
      </Title>
      <AboutAbout>
        We are coders, Webdesigner, techies, new community.<br />
        We invite you to join us: work together on some projects,<br />
        introduce new topics, drink coffee, eat falafel, hang out,<br />
        discuss current One Piece episodes and connect with local techies. SUGOI!
      </AboutAbout>
    </>
  );
}

export { About }