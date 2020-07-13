import React from 'react';
import styled from 'styled-components';

const AfroDiv = styled.div`
img {
  float: center;
  width: 260px;
  height: auto;
}
`;

const AboutAfro = styled.p`
text-align: center;
padding-left: 10px;
padding-right: 10px;
`;

function AfroDeutschPic() {
  return(
    <AfroDiv id="afrdAdvert">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.instaff.jobs%2Ffiles%2Fimages%2FOnvONtOcGfdGDZXiiuEAoXMd2duJej0JgVrehFOW.jpg&f=1&nofb=1" />
    </AfroDiv>
  );
}

function AfroDescription() {
  return(
    <AboutAfro>
      I'm baby pabst ut hot chicken, fam consectetur man bun iPhone man braid venmo incididunt umami keytar. Biodiesel in dolore, austin everyday carry culpa id leggings cray pickled qui ea irony coloring book. Ethical chambray seitan sartorial bushwick banh mi. Wolf sunt next level kickstarter bushwick nulla. Adipisicing blue bottle dolore DIY minim organic semiotics chia godard vinyl.
    </AboutAfro>
  );
}

export { AfroDeutschPic, AfroDescription }