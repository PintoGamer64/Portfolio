//components
import React, { useState } from 'react';

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

//Component
function Navbar(props) {

    console.log(props);

    const [darkMode, setDarkMode] = useState(false);
    const [menu, setMenu] = useState('Inicio');

    let themeIcon;
    let Schema = {
        schema: '#fff',
        subSchema: '#000',
        text: '000',
    }

    console.log('render - navbar');

    if (darkMode === false) {
        Schema.schema = '#fff';
        Schema.text = '#000';
        Schema.subSchema = '#000';
        themeIcon = route6;
    } else {
        Schema.schema = '#000';
        Schema.subSchema = '#fff';
        Schema.text = 'fff';
        themeIcon = route7;
    }

    return (
        <nav className='navbar-JP'>
            <div id='navbar-JP01' style={{
                background: Schema.schema,
                border: `5px solid ${Schema.subSchema}`
            }}>
                <div className='navbar-01'>
                    <button style={{ background: Schema.schema }} className='Btn-NB' width={40} height={40} onClick={ () => {
                        setDarkMode(!darkMode);
                        props.fun(darkMode)
                    }}>
                        <img className='themes' width={40} height={40} src={themeIcon} alt='dark/light-mode' />
                    </button>
                </div>
                <div className='navbar-03'>
                    <div id='navbar-03-1'>
                        <h1 style={{ color: Schema.subSchema }} className='navbarText-03-1'>{menu}</h1>
                    </div>
                </div>
                <div className='navbar-02'>
                    <ul id='navbar-02-2'>
                        <li>
                            <a onClick={() => {
                                setMenu('Inicio');
                            }}
                                href='#home'><img width={40} height={40} src={ route1 } alt='Home-icon' id='home' /></a>
                        </li>
                        <li>
                            <a onClick={() => {
                                setMenu('Habilidades');
                            }}
                                href='#skills'><img width={40} height={40} src={ route5 } alt='Skills-icon' id='skills' /></a>
                        </li>
                        <li>
                            <a onClick={() => {
                                setMenu('Proyectos');
                            }}
                                href='#works'><img width={40} height={40} src={ route2 } alt='Proyect-icon' id='proyects' /></a>
                        </li>
                        <li>
                            <a onClick={() => {
                                setMenu('Github');
                            }}
                                href='#github'><img width={40} height={40} src={ route3 } alt='Github-icon' id='github' /></a>
                        </li>
                        <li>
                            <a onClick={() => {
                                setMenu('Contacto');
                            }}
                                href='#mail-contact'><img width={40} height={40} src={ route4 } alt='Mail-icon' id='mail' /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )


}

export default Navbar;