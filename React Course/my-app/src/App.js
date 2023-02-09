// import logo from './logo.svg';
import './App.css';
// import About from './Compoenents/About';
import Navbar from './Compoenents/Navbar';
import TextForm from './Compoenents/TextForm';
import React, { useState } from 'react';




function App() {
  const [mode, SetMode] = useState('light'); //whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      SetMode('dark');
      document.body.style.backgroundColor = '#163a70';
    }
    else {
      SetMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
   
  return (
    <>
      <Navbar title="TextDotCom" aboutText="About Us" mode={mode} toggleMode={toggleMode} contact="Contact Us"/>
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm  heading="Enter the Text to Analyze below" mode={mode}/>
        {/* <About/> */}
      </div>  

   
    </>
  );
}

export default App;
