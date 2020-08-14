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
        every Thursday<br /> 17:30
      </EventDate>
      <AboutEvent>
        location: <span style={{fontWeight: 'bold'}}>Jülicher Str. 24a 50674 Köln</span><br />
        <span style={{fontWeight: 'bold'}}>Every thursday(donnerstag) 17:30 - open end</span><br />
        you can come at any time you like<br />
        we will be there, working on some projects <br />
      </AboutEvent>
    </>
  );
}

export { Event }