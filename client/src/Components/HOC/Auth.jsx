import React, { useEffect } from 'react';
import { auth } from '../../UserActions/Actions';
import { useGlobal } from '../../StateStore/StateStore';

function Auth(props) {
    const [globalState, globalActions] = useGlobal();
    const { user, token } = globalState;
    const { updateGlobalUser, updateGlobalToken } = globalActions;
    const userToken = localStorage.getItem('user_token');

    useEffect(() => {
        if (userToken) {
            auth(userToken)
                .then(response => {
                    updateGlobalUser({ ...user, ...response.data });
                }).catch(err => {
                    console.error(err);
                })
        } else {
            updateGlobalUser({})
        }        
    }, [token])
    
    return (
        <>
            {props.children}
        </>
    )
}

export default Auth;
