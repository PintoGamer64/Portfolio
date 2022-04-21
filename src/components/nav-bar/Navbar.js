//components
import React, { Component } from 'react';

//imports

//css's
import './navbar.css';

//img's
import route1 from './material/home.png';
import route2 from './material/proyects.png';
import route3 from './material/github.png';
import route4 from './material/mail.png';
import route5 from './material/skills.png';
import route6 from './material/dark_mode.png';
import route7 from './material/light_mode.png';
import route8 from './material/logo.png';

//data's

//functions & methods

//Component
class Navbar extends Component {

    //
    /* ----- Const's -----*/
    //
    themeIcon;
    logoIcon = route8;

    //
    /* ----- States -----*/
    //
    state = {
        backgroundT: false,
        menuText: 'Inicio'
    }

    Schema = {
        schema: '#fff',
        subSchema: '#000',
        text: '000',
    }

    //
    /* ----- Methods -----*/
    //
    ColorTheme() {
        this.setState({ backgroundT: !this.state.backgroundT });
        console.log(`fondo navbar - ${this.state.backgroundT}`);
    }

    themebody() {
        this.props.fun(this.state.backgroundT);
    }

    selectMenu(type) {
        this.setState({ menuText: type });
    }

    //
    /* ----- Component Render -----*/
    //
    render() {

        console.log('render - navbar');

        if (this.state.backgroundT === false) {
            this.Schema.schema = '#fff';
            this.Schema.text = '#000';
            this.Schema.subSchema = '#000';
            this.themeIcon = route6;
        } else {
            this.Schema.schema = '#000';
            this.Schema.subSchema = '#fff';
            this.Schema.text = 'fff';
            this.themeIcon = route7;
        }

        return (
            <nav className='navbar-JP'>
                <div id='navbar-JP01' style={{
                    background: this.Schema.schema,
                    border: `5px solid ${this.Schema.subSchema}`
                }}>
                    <div className='navbar-01'>
                        <button style={{ background: this.Schema.schema }} className='Btn-NB' width={40} height={40} onClick={() => {
                            this.ColorTheme()
                            this.themebody()
                            this.props.fun(this.state.backgroundT)
                        }}>
                            <img className='themes' width={40} height={40} src={this.themeIcon} alt='dark/light-mode' />
                        </button>
                    </div>
                    <div className='navbar-03'>
                        <div id='navbar-03-1'>
                            <h1 style={{ color: this.Schema.subSchema }} className='navbarText-03-1'>{this.state.menuText}</h1>
                        </div>
                    </div>
                    <div className='navbar-02'>
                        <ul id='navbar-02-2'>
                            <li>
                                <a onClick={() => {
                                    this.selectMenu('Inicio')
                                }}
                                    href='#home'><img width={40} height={40} src={route1} alt='Home-icon' id='home' /></a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    this.selectMenu('Habilidades')
                                }}
                                    href='#skills'><img width={40} height={40} src={route5} alt='Skills-icon' id='skills' /></a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    this.selectMenu('Proyectos')
                                }}
                                    href='#works'><img width={40} height={40} src={route2} alt='Proyect-icon' id='proyects' /></a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    this.selectMenu('Github')
                                }}
                                    href='#github'><img width={40} height={40} src={route3} alt='Github-icon' id='github' /></a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    this.selectMenu('Contacto')
                                }}
                                    href='#mail-contact'><img width={40} height={40} src={route4} alt='Mail-icon' id='mail' /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )

    }

}

export default Navbar;