import React, { Component } from 'react';
import Navbar from './components/nav-bar/Navbar.js';
import './App.css';

class App extends Component {

  state = {

    color: '#fff',

  }

  themeAouth = (x) => {

    if (x === false) {
      console.log(this.state.color)
      this.setState({ color: '#565656' })
    } else {
      console.log(this.state.color)
      this.setState({ color: '#fff' })
    }

  }

  render() {

    console.log('render')

    return (

      <div className="App" style={{ background: this.state.color }}>

        <div className='Navbar'>
          <Navbar fun={this.themeAouth} />
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1> Hello World</h1>

      </div>

    )

  }

}

export default App;
