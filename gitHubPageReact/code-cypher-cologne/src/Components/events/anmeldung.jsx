import React from 'react';
import styled from 'styled-components';
import { useState } from '@hookstate/core';

import { RegForm } from './regForm';


const Title = styled.h1`
background-color: black;
scroll-margin-top: 31px;
`;

const AboutAnmeldung = styled.div`
text-align: center;
padding-left: 3px;
padding-right: 3px;
`;

function Anmeldung() {
  // freePlaces.promised? <CircularProgress color="secondary" />: freePlaces.value;
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  ///////declaring input states of reg form/////////
  return(
    <>
      <Title id='regView'>
        check in
      </Title>
      <AboutAnmeldung>
        <RegForm />
          <p>automated registry if we have free place<br />
          alternatively registry: <a href="https://ianditalk.slack.com/archives/C016FMA071T" target="_blank">Slack Channel</a><br />
          or whatsapp / telegramm +49 177 5578836<br />
          See you o/
        </p>
      </AboutAnmeldung>
    </>
  );
}

export { Anmeldung }

