// import logo from './logo.svg';
import './App.css';
// import About from './Compoenents/About';
import Navbar from './Compoenents/Navbar';
import TextForm from './Compoenents/TextForm';
import React, { useState } from 'react';
import Alerts from './Compoenents/Alerts';


function App() {
  const [mode, SetMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }



  const toggleMode = ()=>{
    if(mode === 'light'){
      SetMode('dark');
      document.body.style.backgroundColor = '#163a70';
      showAlert("Dark mode has been enabled","success");
    }
    else {
      SetMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }

   
  return (
    <>
      
      <Navbar title="TextDotCom" aboutText="About Us" mode={mode}  toggleMode={toggleMode} contact="Contact Us"/>
      {/* <Navbar/> */}
      <Alerts alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the Text to Analyze below" mode={mode}/>
        {/* <About/> */}
      </div>  

   
    </>
  );
}

export default App;
