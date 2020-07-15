import React, { useEffect } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

const MyLink = styled.a`
&:hover {
  text-decoration:none;
  color:white;
  cursor: pointer;
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
  if(window.innerWidth >= 1550){
    console.log('nixda');
    return;
  }
  const nav = document.getElementById('topNav');
  if (responsive) {
    nav.className = 'topnav';
    responsive = false;
  } else {
    nav.className += ' responsive';
    responsive = true;
  }
}

let initView, aboutView, hostsView, eventsView, regView, contactView, imprView;

export default function Navigation() {
  useEffect(() => {
    initView = document.getElementById('root');
    aboutView = document.getElementById('aboutView');
    hostsView = document.getElementById('mintHost');
    eventsView = document.getElementById('eventsView');
    regView = document.getElementById('regView');
    contactView = document.getElementById('contactView');
    imprView = document.getElementById('imprView');
  }, [])
  return (
    <ul style={navi} className="topnav" id="topNav">
      <MyListItem>
        <HomeIcon 
          onClick={() => {
            initView.scrollIntoView(true);
          }}
        />
      </MyListItem>
      <MyListItem style={verticalDivider}>
        <MyLink
          onClick={() => {
            aboutView.scrollIntoView();
            responsiveFunc();
          }}
        >
        about
        </MyLink>
      </MyListItem>
      <MyListItem style={verticalDivider}>
        <MyLink
          onClick={() => {
            hostsView.scrollIntoView();
            responsiveFunc();
          }}
        >
        hosts
      </MyLink>
      </MyListItem>
      <MyListItem style={verticalDivider}>
        <MyLink
          onClick={() => {
            eventsView.scrollIntoView();
            responsiveFunc();
          }}
        >upcoming events
        </MyLink>
      </MyListItem>
      <MyListItem style={verticalDivider}>
        <MyLink
          onClick={() => {
            regView.scrollIntoView();
            responsiveFunc();
          }}
        >check in
        </MyLink>
      </MyListItem>
      <MyListItem style={verticalDivider}>
        <MyLink
          onClick={() => {
            contactView.scrollIntoView();
            responsiveFunc();
          }}
        >contact
        </MyLink>
      </MyListItem>
      <MyListItem style={verticalDivider}>
        <MyLink
          onClick={() => {
            imprView.scrollIntoView();
            responsiveFunc();
          }}
        >impressum
        </MyLink>
      </MyListItem>
      <MyListItem className="burgerMenu">
        <MenuIcon
          onClick={responsiveFunc}
        />
      </MyListItem>
    </ul>
  );
}
