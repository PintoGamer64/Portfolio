//components
import React, { Component } from 'react';

//imports

//css's
import './Navbar.css';

//img's
import route1 from './material/home.png';
import route2 from './material/proyects.png';
import route3 from './material/github.png';
import route4 from './material/mail.png';
import route5 from './material/skills.png';
import route6 from './material/dark_mode.png';
import route7 from './material/light_mode.png';
import route8 from './material/lenguage-spain.png';
//import route9 from './material/lenguage-english.png';

//data's


//functions & methods

//Component
class Navbar extends Component {

    themeIcon;

    state = {

        backgroundT: false,

        lenguaje: true

    }

    Schema = {

        schema: '#fff'

    }

    ColorTheme(){

        this.setState({ backgroundT: !this.state.backgroundT });

        console.log(`fondo navbar - ${this.state.backgroundT}`)

    }

    themebody(){

        this.props.fun(this.state.backgroundT)

    }

    render() {

        if (this.state.backgroundT === false) {
            this.Schema.schema = '#fff'
            this.themeIcon = route6;
        } else {
            this.Schema.schema = '#333333'
            this.themeIcon = route7;
        }



        return (
            <nav className='navbar-JP' style={{ background: this.Schema.schema }}>
                <div id='navbar-JP01'>
                    <div className='navbar-01'>
                        <button width={50} height={50}>
                            <img className='lenguaje' width={50} height={50} src={route8} alt='lenguages' />
                        </button>
                    </div>
                    <div className='navbar-02'>
                        <ul id='navbar-02.1'>
                            <li>
                                <a href='#skills'><img width={50} height={50} src={route5} alt='Skills-icon' id='skills' /></a>
                            </li>
                            <li>
                                <a href='#works'><img width={50} height={50} src={route2} alt='Proyect-icon' id='proyects' /></a>
                            </li>
                            <li>
                                <a href='#home'><img width={50} height={50} src={route1} alt='Home-icon' id='home' /></a>
                            </li>
                            <li>
                                <a href='#github'><img width={50} height={50} src={route3} alt='Github-icon' id='github' /></a>
                            </li>
                            <li>
                                <a href='#mail-contact'><img width={50} height={50} src={route4} alt='Mail-icon' id='mail' /></a>
                            </li>
                        </ul>
                    </div>
                    <div className='navbar-03' onClick={ () => { this.ColorTheme()
                    this.themebody()
                    this.props.fun(this.state.backgroundT) } } >
                        <button width={50} height={50}>
                            <img className='themes' width={50} height={50} src={this.themeIcon} alt='dark/light-mode' />
                        </button>
                    </div>
                </div>
                <div id='navbar-JP02'>
                    <div className='navbar-05'>
                        <ul id='navbar-04.1'>
                            <li className='navbarText-04.1'>Habilidades</li>
                            <li className='navbarText-04.1'>Proyectos</li>
                            <li className='navbarText-04.1'>Inicio</li>
                            <li className='navbarText-04.1'>Github</li>
                            <li className='navbarText-04.1'>Contacto</li>
                        </ul>
                    </div>
                </div>
            </nav>

        )

    }

}

export default Navbar;