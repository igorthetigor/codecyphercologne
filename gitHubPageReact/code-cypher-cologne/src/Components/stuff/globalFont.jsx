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

  @media screen and (min-width: 960px) {
    body {
      background: repeating-linear-gradient(
        -55deg,
        #f6ba52,
        #f6ba52 20px,
        #ffd180 20px,
        #ffd180 40px
      );
    }
    #root {
      width: 960px;
      margin: auto;
      background-color: white;
    }
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