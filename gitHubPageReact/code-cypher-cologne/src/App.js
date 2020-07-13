import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BeonStyle } from './Components/stuff/globalFont';

// Los Components
import HeaderTitle from './Components/header';
import Navigation from './Components/navigation/navBar';
import Content from './Components/contentBody';

function App() {
  return (
    <div className="App">
      <BeonStyle />
      <HeaderTitle />
      <Navigation />
      <Content />
    </div>
  );
}

export default App;
