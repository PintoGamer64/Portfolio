//import react
import React, { useState } from 'react';

//CSS's
import './Home.css';

//Images
import profile from "./material/profile.jpg";

//Function MAIN
function Home(props) {

    //state
    const [deploy, setDeploy] = useState(0);

    //funtion
    function clickImg() {

        console.log('click');

        if (deploy === 0) {
            setDeploy(0.3);
        } else {
            setDeploy(0);
        }

        console.log(deploy);

    }

    return (

        <div id='Home-JP'>
            <div className='Home-JP01'>
                <div id='profile-back'>
                    <img style={{ opacity: deploy }} src="https://spotify-github-profile.vercel.app/api/view?uid=uwjnzqtalkghfb2gd7ueltxzb&cover_image=true&theme=novatorem&bar_color=ff0000&bar_color_cover=false" alt="spotify-Joan Cardozo" id='img-back' />
                </div>
                <div className='Home-JP01-a Spotify-activity'>

                </div>
                <div className='Home-JP01-a'>

                </div>
                <div className="Home-JP01-b">
                    <div className='Home-JP01-b-a'>
                        <h1  >Web Developer</h1>
                    </div>
                    <div onClick={clickImg} className="Home-JP01-b-b">
                        <img id='profile-img' src={profile} alt="Joan Sebastian Cardozo Salinas" />
                    </div>
                    <div className='Home-JP01-b-c'>
                        <h1>Joan Cardozo</h1>
                    </div>
                </div>
                <div className="Home-JP01-c">

                </div>
            </div >
            <div className='Home-JP02'>

            </div>
        </div >

    )

};

export default Home;