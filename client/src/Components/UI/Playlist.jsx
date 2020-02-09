import React from 'react';
import { compositions } from '../../data/compositions';

function Playlist() {
    

    const renderComposition = () => {
        return compositions.map((compose, i) => {
            return <li className='album__track'>
                        <i></i>
                        <span>Pink Ladies - {compose}</span>
                    </li>
        })
    }
    return (
        <div className='album__playlist'>
            
            	<ul>
                    {renderComposition()}
                </ul>
            
        </div>
    )
}

export default Playlist;
