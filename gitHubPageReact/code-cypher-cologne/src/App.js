import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Los Components
import Header from './Components/header';
import Testing from './Components/contentBody';

function App() {
  return (
    <div className="App">
      <Header />
      <Testing />
    </div>
  );
}

export default App;
