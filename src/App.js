import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enable ", "success");
      //document.title = 'Textutils - Dark Mode';
      /* /setInterval(() => {
            document.title ='Textutils is Amazing Mode';n
          },2000);
          setInterval(() => {
            document.title =' install Textutils now';
          },1500);  */
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enable ", "success");
      //document.title = 'Textutils - Light Mode';
    }
  }

  return (
    
    <Router>
      <Navbar title="Textutils" About="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3 ">
      <Routes>
        <Route exact path="/about" element={<About mode={mode} />}/>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try Textutils - word counter, character counter, remove extra spaces" mode={mode} />}/>
        </Routes>
      </div>
      
      </Router>
    
  );
}

export default App;
