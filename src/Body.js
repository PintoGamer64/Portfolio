import React, { Component } from 'react';
import Navbar from './components/nav-bar/Navbar.js';
import './Body.css';

class Body extends Component {

  render() {

    return (

      <div className="Body" style={{ background: this.props.color }}>

        <Navbar fun={this.props.f}/>

      </div>

    )

  }

}

export default Body;