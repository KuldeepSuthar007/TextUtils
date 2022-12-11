import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';



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
      document.title = 'Textutils - Dark Mode';
    /* /setInterval(() => {
          document.title ='Textutils is Amazing Mode';
        },2000);
        setInterval(() => {
          document.title =' install Textutils now';
        },1500);  */
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enable ", "success");
      document.title = 'Textutils - Light Mode';
    }
  }
 
  return (
      <>
      
        <Navbar title="Textutils" About="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        
          <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode} />  
            
        </div>
       
    </>
  );
}

export default App;
