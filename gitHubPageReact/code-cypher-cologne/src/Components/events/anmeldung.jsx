import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const APInode = 'http://localhost:9000/register';

const Title = styled.h1`
background-color: black;
scroll-margin-top: 31px;
`;

const AboutAnmeldung = styled.p`
text-align: center;
padding-left: 3px;
padding-right: 3px;
`;

function Anmeldung() {
const [regPlace, setPlace] = React.useState(0);

const getRegs = async () => {
  let a = new Promise ((resolve, reject) => {
    fetch(APInode, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      resolve(res.message);
    }).catch(err => console.log(err));
  });
  let result = await a;
  return result;
};

const manualUpdate = () => {
  getRegs()
  .then(res => setPlace(res))
  .catch(err => console.log(err));
};

React.useEffect(() => {
  getRegs()
  .then(res => {
    document.title = res;
    setPlace(res);
  });
}, []);


  return(
    <>
      <Title id='regView'>
        check in
      </Title>
      <AboutAnmeldung>
        Meld dich an: AnmeldeForm - WtsApp/Tele - Slack
        freie Plätze: {regPlace}
        <button type="submit" onClick={() => manualUpdate() } >get</button>
      </AboutAnmeldung>
    </>
  );
}

export { Anmeldung }