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
const APInode = 'https://nodeproxyccc-284104.ue.r.appspot.com/register';
// const APInode = 'https://8080-54eb4db8-0533-411d-a735-48ebc74ac8e4.europe-west1.cloudshell.dev/register/?authuser=0';

const fetchFreePlace = () => fetch(APInode, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json())
  .then(res => res.message);

const placeFetchDb = createState(fetchFreePlace);

export const RegForm = () => {

  const statusState = useState('');
  const nameState = useState('');
  const mailState = useState('');
  const ghaccState = useState('');
  const mobileState = useState('');
  const linkedInState = useState('');

  const checkRegData = () => {
    statusState.set('loading...');
    if(nameState.get().replace(/\s/g, '').length >= 3 && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(mailState.get())) {
      fetch(APInode, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: nameState.get(), email: mailState.get(), github: ghaccState.get(), mobile: mobileState.get(), linkedin: linkedInState.get()})
        })
        .then(res => res.json())
        .then(res => {
          if(!res.result) {
            console.log('hier');
            freePlace.set(res.message);
            statusState.set('Welcome!');
            nameState.set('');
            mailState.set('');
            ghaccState.set('');
            mobileState.set('');
            linkedInState.set('');
          } else {
            statusState.set(res.reason);
          }
        });
    } else {
      statusState.set('incorrect name(min 3 signs without space) or mail');
    }
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
      <p>available seats: {freePlace.get()}</p>
      <p>{statusState.get()}</p>
      <form id="regForm" >
        <fieldset>
          <div><FaceIcon color='secondary' /><input value={nameState.get()} onChange={e => nameState.set(e.target.value)} placeholder='name' /></div>
          <div><AlternateEmailIcon color='secondary' /><input value={mailState.get()} onChange={e => mailState.set(e.target.value)} placeholder='youngtalent@gmail.com' /></div>
          <div><GitHubIcon /><input value={ghaccState.get()} onChange={e => ghaccState.set(e.target.value)} placeholder='Github' /></div>
          <div><PhoneAndroidIcon /><input value={mobileState.get()} onChange={e => mobileState.set(e.target.value)} placeholder='whatsapp/telegram/signal' /></div>
          <div><LinkedInIcon color='primary' /><input value={linkedInState.get()} onChange={e => linkedInState.set(e.target.value)} placeholder='linkedin' /></div>
        </fieldset>
      </form>
      <button type="submit" value="Submit" onClick={ () => checkRegData() } >Submit</button>
    </>
  );
}