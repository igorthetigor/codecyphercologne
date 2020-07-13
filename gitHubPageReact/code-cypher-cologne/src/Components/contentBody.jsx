import React from 'react';
import { ChristophPic, ChristophDescription } from '../Components/hosts/minternational';
import { IgorPic, IgorDescription } from '../Components/hosts/igorthetigor';
import { AfroDeutschPic, AfroDescription } from '../Components/hosts/afroDeutsch';

import { Event } from '../Components/events/nextEvent';
import { Anmeldung } from '../Components/events/anmeldung';
import { Kontakt } from '../Components/events/kontakt';
import { Impressum } from './impressum';

import styled from 'styled-components';

const HostsPic= styled.div`
display: flex;
`;

export default function Content() {
  return (
    <>
      <HostsPic>
      <ChristophPic />
      <IgorPic />
      </HostsPic>
      <ChristophDescription />
      <IgorDescription />
      <AfroDeutschPic />
      <AfroDescription />
      <Event />
      <Anmeldung />
      <Kontakt />
      <Impressum />
    </>
  );
}