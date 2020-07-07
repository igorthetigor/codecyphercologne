// import font from './Beon.otf';
import '../../beon/stylesheet.css';
import { createGlobalStyle } from 'styled-components';

export const BeonStyle = createGlobalStyle`

  ${'' /* @font-face {
    font-family: 'Notable';
    src: url(https://fonts.gstatic.com/s/notable/v4/gNMEW3N_SIqx-WX9yHQiFQ.woff2) format('woff2');
  }; */}

  h1 {    
    font-family: 'BeonMedium';
    color: white;
  };

`;

// console.log(font);