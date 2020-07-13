// import font from './Beon.otf';
import '../../beon/stylesheet.css';
import { createGlobalStyle } from 'styled-components';

export const BeonStyle = createGlobalStyle`

  .topnav {
    overflow: hidden;
  }

  p {
    font-size: 1.4em;
  }

  @media screen and (max-width: 1550px) {
    .topnav li:not(:first-child) {display: none;}
    
    .topnav li:last-child{
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
  }

  h1 {    
    font-family: 'BeonMedium';
    color: white;
  }

`;

// console.log(font);