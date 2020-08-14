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
scroll-margin-top: 31px;
`;

// const chrisDiv = {
//   display: 'flex',
//   alignContent: 'left',
//   width
// };

function ChristophPic() {
  return(
    <ChrisDiv className="host" >
      <img src="https://ca.slack-edge.com/T0128S6164T-U0128L1CNDQ-9f277049c3c4-512" alt="Christoph Kuehn" />
    </ChrisDiv>
  );
}

function ChristophDescription() {
  return(
    <>
      <ChrisH2 id="mintHost" >Christopher</ChrisH2>
      <AboutChris>
      Beyond the basics:<br />
      HTML, CSS, JS, React, Linux, Bash<br />
      In Love with:<br />
      CSS, Bootstrap, Tailwind, Styled Components, UX/UI Design, Styling in general<br />
      General developer stuff:<br />
      Git, Github,<br />
      Non developer stuff I like:<br />
      Cyberpunk, Technology in general, Movies, Pizza, Noodles<br />
      In future I want:<br />
      ... to become a way much better developer, Full-Stack-Nearly-Everything!<br />
    </AboutChris>
    </>
  );
}

export { ChristophPic, ChristophDescription }