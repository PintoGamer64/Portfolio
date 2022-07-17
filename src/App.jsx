import React, { useState } from 'react';
import Navbar from './components/nav-bar/Navbar.jsx';
import Home from './Inicio/Home.jsx';
import './App.css';
import Body from './Inicio/Components/Body/Body.jsx';

function App() {

  const [darkMode, setDarkMode] = useState('#fff');

  function NavbarJSX(theme) {

    if (theme === false) {
      console.log('dark mode');
      setDarkMode('#565656');
    } else {
      console.log('light mode');
      setDarkMode('#fff');
    }

  }

  function theme(params) {
    if (params === true) {
      return darkMode;
    }
      
    }

  return (

    <div className="App" style={{ background: darkMode }}>

      <div className='Navbar'>
        <Navbar fun={NavbarJSX} />
      </div>
      <div className="home">
        <Home theme={theme} />
      </div>
      <div>
        <Body />
      </div>
    </div>

  );

}

export default App;
