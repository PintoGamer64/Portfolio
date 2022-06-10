//import react
import React, { useState } from 'react';

//CSS's
import './Home.css';

//Images
import profile from "./material/profile.jpg";

//Function MAIN
function Home() {

    //state
    const [deploy, setDeploy] = useState('none');
    const [topped, setTopped] = useState('-132px');

    //funtion
    function clickImg() {

        console.log('click');

        if (deploy === 'none') {
            setDeploy('flex');
            setTopped('-264px');
        } else {
            setDeploy('none');
            setTopped('-132px');
        }

        console.log(deploy);

    }

    return (

        <div id='Home-JP'>
            <div className='Home-JP01'>
                <div id='profile-back' />
                <div className='Home-JP01-a Spotify-activity'>

                </div>
                <div className='Home-JP01-a'>

                </div>
                <div style={{ top: topped }} className="Home-JP01-b">
                    <div style={{ display: deploy }} className='Home-JP01-b-a'>
                        <h1>Web Developer</h1>
                    </div>
                    <div onClick={clickImg} className="Home-JP02-b-b">
                        <img id='profile-img' src={profile} alt="Joan Sebastian Cardozo Salinas" />
                    </div>
                    <div style={{ display: deploy }} className='Home-JP01-b-c'>
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