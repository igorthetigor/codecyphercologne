import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
background-color: black;
`;

const KontaktDaten = styled.p`
text-align: center;
padding-left: 3px;
padding-right: 3px;
`;

function Kontakt() {
  return(
    <>
      <Title>
        Kontakt
      </Title>
      <KontaktDaten>
        Slack - WhatsApp/ Telegram
      </KontaktDaten>
    </>
  );
}

export { Kontakt }