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
        location: <span style={{fontWeight: 'bold'}}>Jülicher Str. 24a 50674 Köln</span><br />
        <span style={{fontWeight: 'bold'}}>we open at: 12-00 and expect it to go for like 3 hours</span><br />
        because it's the first event we organize and want to keep it 
        comfortable and interesting for everybody, 
        we will not set a concrete topic for this first event and decide adhoc
        if we want to discuss a specific topic all together. 
        Maybe one of you would like to introduce some topic to all of us.
      </AboutEvent>
    </>
  );
}

export { Event }