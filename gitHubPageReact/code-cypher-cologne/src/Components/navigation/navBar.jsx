import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

function whoWeAre() {
  console.log('we are gayyyyyyyyyyyyyyy');
}

const verticalDivider = {
  borderLeft: '6px solid white',
  paddingLeft: '10px',
};

const navi = {
  listStyleType: 'none',
  backgroundColor: '#30475e',
  paddingLeft: '17px',
};

function responsiveFunc() {
  const myList = document.getElementById("topNav");
  myList.className = myList.className === "topnav"
  ? myList.className += " responsive"
  : myList.className = "topnav"; 
}

export default function Navigation() {
  return (
    <ul className="topnav" id="topNav" style={navi}>
      <li><a href="https://duckduckgo.com/?q=learn+to+code&t=lm&ia=web" target="_blank">coden lernen</a></li>
      <li style={verticalDivider}><a href="javascript:void(0)" target="_blank" onClick={whoWeAre}>hosts</a></li>
      <li style={verticalDivider}><a href="">code cypher</a></li>
      <li style={verticalDivider}><a href="">Anmeldung</a></li>
      <li style={verticalDivider}><a href="">Kontakt</a></li>
      <li style={verticalDivider}><a href="">Impressum</a></li>
      {/* <li><a href="">{<MenuIcon/>}</a></li> */}
      <li className="burgerMenu"><MenuIcon onClick={responsiveFunc} /> </li>
    </ul>
  );
}
