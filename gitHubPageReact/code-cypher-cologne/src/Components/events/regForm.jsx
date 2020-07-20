import React from 'react';
import { createState, useState } from '@hookstate/core';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import FaceIcon from '@material-ui/icons/Face';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// const APInode = 'http://192.168.0.178:9000/register';
const APInode = 'http://localhost:9000/register';

const fetchFreePlace = () => fetch(APInode)
  .then(res => res.json())
  .then(res => res.message);

const placeFetchDb = createState(fetchFreePlace);

export const RegForm = () => {
  
  ///////////async getting database on load//////////
  ///////////////////////////////////////////////////

  const nameState = useState('');
  // const mailState = useState('');
  // const ghaccState = useState('');
  // const mobileState = useState('');
  // const linkedInState = useState('');

  const freePlace = useState(placeFetchDb);

  if (freePlace.promised) {
    return <span>available seats: <CircularProgress color="secondary" /></span>
  }

  if(freePlace.error) {
    return <span>failed to load<br /></span>
  }

  return(
    <>      
      <span>available seats: {freePlace.get()}</span>
      <div><FaceIcon color='secondary' /><input value={nameState.get()} onChange={e => nameState.set(e.target.value)} /></div>
    </>
  );
}