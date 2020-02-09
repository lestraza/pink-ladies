import React from 'react'

function AuthButton(props) {
    return (
        <div className={'auth-button'} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export default AuthButton
