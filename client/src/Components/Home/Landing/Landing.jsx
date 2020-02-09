import React from 'react';
import Album from '../../UI/Album';

import { Fade } from 'react-reveal';
import flamingos from '../../../images/flamingo.jpg';
import albums from '../../../data/albums';



function Landing(props) {

    const getAlbumProps = () => {
        return albums.map((album, i) => {
            if(album.newAlbum) {
                return <Album {...album} key={i}/>
            }
        })
    }
    return (
        <div className='landing'>
            <div className="wrapper">
            {getAlbumProps()}
                <Fade bottom delay={700}>
                    <div className="landing__video-container">
                        <h1> NEW VIDEO <div className='album__venera'></div>ETERNITY</h1>
                        <img src={flamingos} alt="flamingos" className='landing__video'/>

                    </div>
                </Fade>
            </div>

        </div>
    )
}

export default Landing
