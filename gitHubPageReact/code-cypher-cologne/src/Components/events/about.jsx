import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
background-color: black;
scroll-margin-top: 30px;
border-top: 8px solid #FF1717;
`;

const AboutAbout = styled.p`
text-align: center;
padding-left: 12px;
padding-right: 12px;
`;

function About() {
  return(
    <>
      <Title id='aboutView'>
        About
      </Title>
      <AboutAbout>
        Well hello there o/<br />
        Thank you for visiting us online.
        We are techies located in Köln(Cologne) and organizing events
        for people who are interested in tech topics, mainly <b>it</b>.
        Events are <b>free</b> and adressed to people of <i>all levels</i>.
        Basic requirement is, of course, you already found out that the internet 
        provides answers to all of your questions.
        <br />The main purpose of this happening is for <i>YOU</i> to meet other people 
        who share related interests, get or share inspiration on new projects and 
        connect with other different techs. This is how an event may look like:<br/>
        You can use the time however you prefer - work on your own project;
        have a conversation with someone you met/came with, 
        or participate on a small "guide/tutorial/you name it" which 
        somebody will provide to <i>the ones who are interested</i>. Basically 
        you are free to do anything you feel comfortable with and if you have no ideas, just hang tight to the topic.
        P.S. For purposes of convenience, in case no international participants, the event language will be german, ofc...
      </AboutAbout>
    </>
  );
}

export { About }