// import font from './Beon.otf';
import '../../beon/stylesheet.css';
import { createGlobalStyle } from 'styled-components';

console.log('easy peazy');

export const BeonStyle = createGlobalStyle`

  ${'' /* @font-face {
    font-family: 'Notable';
    src: url(https://fonts.gstatic.com/s/notable/v4/gNMEW3N_SIqx-WX9yHQiFQ.woff2) format('woff2');
  }; */}
  a{
    color:white;
  }

  a:hover {
    color:white;
    text-decoration: none;
  }

  li {
    display: inline;
    margin-left:10px;
    margin-right: 10px;
    font-size: 1.6em;
    color: white;
  }

  li:first-child {
    float: left;
    margin-left: 0px;
  }

  li:last-child {
    float:right;
    display: none;
  }

  .topnav {
    overflow: hidden;
  }

  @media screen and (max-width: 1550px) {
    .topnav li:not(:first-child) {display: none;}
    
    .topnav li.burgerMenu {
      display: block;
      float: right;
    }
  }

  @media screen and (max-width: 1550px) {
    .topnav.responsive { position: relative; }

    .topnav.responsive .burgerMenu {
      position: absolute;
      right: 0;
      top: 0;
    }

    .topnav.responsive li{
      float:none;
      display: block;
      text-align: left;
    }
${'' /* 
    .topnav {
      display: inline-block;
      width: 100%;
    }
    .topnav li.burgerMenu {
      position:relative;
      right: 0;
      top: 0;
    } */}
  }

  h1 {    
    font-family: 'BeonMedium';
    color: white;
  }

`;

// console.log(font);