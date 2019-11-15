import React from 'react';
import { Fade } from 'react-reveal';
import PricingItem from './PricingItem';
import Playlist from './Playlist';
import Socials from './Socials';



function Album(props) {    
    const renderAlbumName = () => {
        if (props.newAlbum) {
            return (
                <h1>
                    NEW ALBUM
                    <div className='album__venera'></div>
                    {props.albumName}
                </h1>
            )
        } else {
            return (
                <h1>
                    {props.albumName}
                    <div className='album__venera'></div>
                    <div className='album__year'>
                        {props.yearOfIssue}
                    </div>
                </h1>
            )
        }
    }

    return (
        <Fade  delay={500}>
            <div className="album">
                <div className="album__caption">
                    {renderAlbumName()}

                </div>
                <img src={props.url} alt="albumCover" width="600" />
                <div className="album__info">
                    {props.newAlbum && <div className="album__pre-order">PRE-ORDER</div> }

                    <PricingItem />
                    <Playlist />
                    <div className="album__player">
                        <div className="album__trackline-container">
                            <div className="album__timing"></div>
                            <div className="album__trackline"></div>
                            <div className="album__timing"></div>
                        </div>
                        <div className="album__play-buttons">
                            <div className="album__prev"></div>
                            <div className="album__next"></div>
                        </div>
                    </div>
                    <Socials isAlbum={true} />

                </div>
            </div>
        </Fade>
    )
}

export default Album
