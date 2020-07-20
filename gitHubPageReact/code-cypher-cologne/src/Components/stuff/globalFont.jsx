// import font from './Beon.otf';
import '../../beon/stylesheet.css';
import { createGlobalStyle } from 'styled-components';

export const BeonStyle = createGlobalStyle`

  .topnav {
    overflow: hidden;
  }

  p, input, button {
    font-size: 1.4em;
  }

  @media screen and (min-width: 960px) {
    body {
      background: url("https://cdn.pixabay.com/photo/2019/06/13/05/44/cube-4270777_960_720.jpg") no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
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