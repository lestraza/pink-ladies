import React from 'react';
import Album from '../UI/Album';
import albums from '../../data/albums';


function Discography() {
    const getAlbumProps = () => {
        return albums.map((album, i) => {
            return <Album {...album} key={i}/>
        })
    }
    
    return (
        <div className='wrapper'>
            {getAlbumProps()}
        </div>
    )
}

export default Discography;
