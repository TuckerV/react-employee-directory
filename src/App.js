import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper"
import Header from "./components/Header.js"

function App() {
  return (
    <div className="app">
      <Wrapper>
        <Header/>
      </Wrapper>
    </div>
  );
}

export default App;
