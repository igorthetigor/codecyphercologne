import React from 'react';
import styled from 'styled-components';

const ChrisDiv = styled.div`

  width: 50%;

  img {
    float: left;
    width: 100%;
    /* width: 180px;
    height: 180px; */
  }

`;

const AboutChris = styled.p`
text-align: left;
padding-right: 20px;
padding-left: 3px;
`;

const ChrisH2 = styled.h1`
background-color: black;
text-align: left;
padding-left: 3px;
`;

// const chrisDiv = {
//   display: 'flex',
//   alignContent: 'left',
//   width
// };

function ChristophPic() {
  return(
    <ChrisDiv className="host" id="minternational" >
      <img src="https://ca.slack-edge.com/T0128S6164T-U0128L1CNDQ-9f277049c3c4-512" alt="Christoph Kuehn" />
    </ChrisDiv>
  );
}

function ChristophDescription() {
  return(
    <>
      <ChrisH2>Christopher</ChrisH2>
      <AboutChris>
      I'm baby hammock sunt synth keytar food truck, kogi etsy four dollar toast do humblebrag cred sed labore street art typewriter. Fingerstache incididunt enamel pin pickled, ipsum fam put a bird on it swag exercitation hoodie. Normcore celiac kombucha bitters DIY forage. Viral eiusmod biodiesel cillum
      </AboutChris>
    </>
  );
}

export { ChristophPic, ChristophDescription }