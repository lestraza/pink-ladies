import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to='/'>
            <div className='logo'>
                Pink Ladies
            </div>
        </Link>
    )
}

export default Logo
