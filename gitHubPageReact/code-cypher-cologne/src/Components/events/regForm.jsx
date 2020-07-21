import React from 'react';
import { createState, useState } from '@hookstate/core';

import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import FaceIcon from '@material-ui/icons/Face';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// const APInode = 'http://192.168.0.178:9000/register';
const APInode = 'https://85.214.152.153/register';

const fetchFreePlace = () => fetch(APInode)
  .then(res => res.json())
  .then(res => res.message);

const placeFetchDb = createState(fetchFreePlace);

export const RegForm = () => {

  const nameState = useState('');
  const mailState = useState('');
  const ghaccState = useState('');
  const mobileState = useState('');
  const linkedInState = useState('');

  const postRegData = () => {
    fetch(APInode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name: nameState.get(), email: mailState.get(), github: ghaccState.get(), mobile: mobileState.get(), linkedin: linkedInState.get()})
    });
    console.log('hui');
  };

  //{name: nameState.get(), mail: mailState.get(), github: ghaccState.get(), mobile: mobileState.get(), linkedin: linkedInState.get()}
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
      <form id="regForm" >
        <fieldset>
          <div><FaceIcon color='secondary' /><input value={nameState.get()} onChange={e => nameState.set(e.target.value)} placeholder='next Mark Suckerberg' /></div>
          <div><AlternateEmailIcon color='secondary' /><input value={mailState.get()} onChange={e => mailState.set(e.target.value)} placeholder='youngtalent@gmail.com' /></div>
          <div><GitHubIcon /><input value={ghaccState.get()} onChange={e => ghaccState.set(e.target.value)} placeholder='youGithub' /></div>
          <div><PhoneAndroidIcon /><input value={mobileState.get()} onChange={e => mobileState.set(e.target.value)} placeholder='whatsapp/telegram/signal' /></div>
          <div><LinkedInIcon color='primary' /><input value={linkedInState.get()} onChange={e => linkedInState.set(e.target.value)} placeholder='linkedin' /></div>
        </fieldset>
      </form>
      <button type="submit" value="Submit" onClick={ () => postRegData() } >Submit</button>
    </>
  );
}