import React from 'react';
import styled from 'styled-components';
import pic from '../stuff/me.jpeg'

const IgorDivTest = styled.div`

  width: 50%;

  img {
    float: right;
    width: 100%;
    /* width: 180px;
    height: 180px; */
  }
`;

const AboutIgor = styled.p`
text-align: right;
padding-left: 3px;
padding-right: 3px;
`;

const IgorH2 = styled.h1`
background-color: black;
text-align: right;
padding-right: 3px;
`;

function IgorPic() {
  return(
    <IgorDivTest className="host" id="igorthetigor" >
      <img src={pic} alt="Igor Liverant" />
    </IgorDivTest>
  );
}

function IgorDescription() {
  return(
    <>
      <IgorH2>Igor</IgorH2>
      <AboutIgor>
        Experte für...<br />
        Webentwicklung[...html/css/js, React, Node, RestAPI], Logistik, Heilkräuter, Wohlfühlatmosphäre, koffeinhaltige Getränke und gesundes Essen<br />
        Kennt sich auch ein wenig aus mit...<br />
        git, ubuntu, bash, MongoDb, WebRTC<br />
        aims next: Golang
      </AboutIgor>
    </>
  );
}

export { IgorPic, IgorDescription }