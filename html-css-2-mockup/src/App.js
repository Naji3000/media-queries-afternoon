import React from 'react';
import logo from './logo.svg';
import './Components/Styles/App.css'
import Nav from './Components/Nav'

function App() {
  return (
    <>
      <Nav />
      <div className='greeting-container'>
        <h1 className='greeting-title'>Welcome To Our Studio!</h1>
        <h1 className='title-motto'>IT'S NICE TO MEET YOU</h1>
        <h3 className='tell-me'>TELL ME MORE</h3>
      </div>



    </>
  );
}

export default App;
