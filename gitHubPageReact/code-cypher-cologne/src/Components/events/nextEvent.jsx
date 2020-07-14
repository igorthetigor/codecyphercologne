import React from 'react';
import styled from 'styled-components';

const EventDate = styled.h1`
background-color: black;
scroll-margin-top: 31px;
`;

const AboutEvent = styled.p`
text-align: center;
padding-left: 3px;
padding-right: 3px;
`;

function Event() {
  return(
    <>
      <EventDate id='eventsView'>
        02 - 08 - 2020<br /> SONNTAG
      </EventDate>
      <AboutEvent>
      I'm baby hoodie poke ugh keffiyeh vice id tumeric retro microdosing small batch fingerstache tofu portland. Paleo gastropub nisi, pickled seitan cold-pressed heirloom kickstarter chambray mustache gluten-free pop-up labore vinyl pinterest. Trust fund dolore forage, cold-pressed cornhole lo-fi pop-up umami try-hard. Fashion axe mustache literally 8-bit food truck skateboard. Shaman ea dolor, glossier pinterest nostrud tote bag occaecat VHS farm-to-table pickled live-edge laboris deep v.
      </AboutEvent>
    </>
  );
}

export { Event }