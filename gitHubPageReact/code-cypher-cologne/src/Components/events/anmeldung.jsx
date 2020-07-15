import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
background-color: black;
scroll-margin-top: 31px;
`;

const AboutAnmeldung = styled.p`
text-align: center;
padding-left: 3px;
padding-right: 3px;
`;

function Anmeldung() {
  return(
    <>
      <Title id='regView'>
        check in
      </Title>
      <AboutAnmeldung>
        Meld dich an: AnmeldeForm - WtsApp/Tele - Slack
      </AboutAnmeldung>
    </>
  );
}

export { Anmeldung }