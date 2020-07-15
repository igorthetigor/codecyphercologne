import React from 'react';
import styled from 'styled-components';

const AfroDiv = styled.div`
/* border-top: 8px solid #FF1717; */
  background-color: #FF1717;
a {
  img {
  /* float: center; */
  width: 260px;
  height: auto;
  &hover {
    cursor: pointer;
  }
  }
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
      <a href="https://www.afrodeutsch-advertising.com/" target="_blank">
        <img        
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.instaff.jobs%2Ffiles%2Fimages%2FOnvONtOcGfdGDZXiiuEAoXMd2duJej0JgVrehFOW.jpg&f=1&nofb=1"
        />        
      </a>
    </AfroDiv>
  );
}

function AfroDescription() {
  return(
    <AboutAfro>
      Mit freundlichster Unterstützung von den Jungs von afrodeutsch advertising, 
      die uns ihr Büro zur Verfügung stellen. Sie sind überragend im Bereich 
      Marketing! Sie können jedes Produkt und jede Marke pushen. 
      Die Jungs haben deutschlandweit ein Netzwerk von Promotern, Marketing-Menschen 
      und Händlern. Checkt sie ab! Es gibt niemand besseren für Kundenaquise.
    </AboutAfro>
  );
}

export { AfroDeutschPic, AfroDescription }