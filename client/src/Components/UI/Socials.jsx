import React from 'react';

function Socials(props) {
    return (
        <div className={`socials ${props.isAlbum ? 'socials--album' : '' }`}>
            <div className="socials__facebook"></div>
            <div className="socials__instagram"></div>
            <div className="socials__twitter"></div>
            <div className="socials__youtube"></div>
        </div>
    )
}

export default Socials;
