import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Dark Mode'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      setText('Light Mode')
      showAlert('Dark mode has been enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setText('Dark Mode')
      showAlert('Light mode has been enabled', 'success')
    }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} text={text} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - Word Couner, Character Counte, Remove extra spaces" mode={mode} />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
