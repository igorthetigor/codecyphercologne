import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

const MyLink = styled.a`
&:hover {
  text-decoration:none;
  color:white;
}
color: white;
`;

const MyListItem = styled.li`
  display: inline;
  margin-left:10px;
  margin-right: 10px;
  font-size: 1.6em;
  color: white;

  &:first-child {
    float: left;
    margin-left: 0px;
  }

  &:last-child {
    float:right;
    display: none;
  }
`;

const verticalDivider = {
  borderLeft: '6px solid white',
  paddingLeft: '10px',
};

const navi = {
  listStyleType: 'none',
  backgroundColor: 'black',
  paddingLeft: '17px',
  margin: '0px',
  overflow: 'hidden',
  position: 'sticky',
  top: '0',
};

let responsive = false;

function responsiveFunc() {
  const nav = document.getElementById('topNav');
  if (responsive) {
    nav.className = 'topnav';
    responsive = false;
  } else {
    nav.className += ' responsive';
    responsive = true;
  }
}

export default function Navigation() {
  return (
    <ul style={navi} className="topnav" id="topNav">
      <MyListItem><HomeIcon /></MyListItem>
      <MyListItem style={verticalDivider}><MyLink href="javascript:void(0)" onClick={() => {console.log('click')}}>hosts</MyLink></MyListItem>
      <MyListItem style={verticalDivider}><MyLink href="javascript:void(0)">upcoming events</MyLink></MyListItem>
      <MyListItem style={verticalDivider}><MyLink href="javascript:void(0)">Anmeldung</MyLink></MyListItem>
      <MyListItem style={verticalDivider}><MyLink href="javascript:void(0)">Kontakt</MyLink></MyListItem>
      <MyListItem style={verticalDivider}><MyLink href="javascript:void(0)">Impressum</MyLink></MyListItem>
      <MyListItem className="burgerMenu"><MenuIcon onClick={responsiveFunc} /> </MyListItem>
    </ul>
  );
}
