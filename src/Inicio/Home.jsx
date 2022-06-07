//import react
import React from 'react';

//CSS's
import './Home.css';

//import data's
import data from './data.json';

//Function MAIN
function Home() {

    return (

        <div id='Home-JP'>
            <div className='Home-JP01'>
                <div id='profile-back' />
                <div className='Home-JP01-a Spotify-activity'>

                </div>
                <div className='Home-JP01-a'>

                </div>
                <div className="Home-JP01-b">
                    <div className='Home-JP01-b-a'>
                        <h1>Web Developer</h1>
                    </div>
                    <div className="Home-JP02-b-b">
                        <img id='profile-img' src={data.links.profile} alt="Joan Sebastian Cardozo Salinas" />
                    </div>
                    <div className='Home-JP01-b-c'>
                        <h1>Joan Cardozo</h1>
                    </div>
                </div>
                <div className="Home-JP01-c">

                </div>
            </div>
            <div className='Home-JP02'>

            </div>
        </div>

    )

};

export default Home;