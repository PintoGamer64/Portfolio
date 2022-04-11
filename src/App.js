import React, { Component } from 'react';
import Body from './Body';
import './App.css';

class App extends Component {

  state = {

    color: '#fff',

  }

  themeAouth = (x) => {

    if (x === false) {
      console.log(x)
      this.setState({ color: '#000' })
    } else {
      console.log(x)
      this.setState({ color: '#fff' })
    }

  }

  render() {

    return (

      <div className="App">

        <Body color={this.state.color} f={this.themeAouth} />

      </div>

    )

  }

}

export default App;
