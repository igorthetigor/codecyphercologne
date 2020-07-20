import React from 'react';
import styled from 'styled-components';
import { useState } from '@hookstate/core';

import { RegForm } from './regForm';

import axios from 'axios';

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
        Meld dich an: AnmeldeForm - WtsApp/Tele - Slack
      </AboutAnmeldung>
    </>
  );
}

export { Anmeldung }

