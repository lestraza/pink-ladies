import React from 'react';

import { useGlobal } from '../../StateStore/StateStore';
import { REGISTER, SIGNIN, SIGNOUT } from '../Modal/constants';
import AuthButton from './AuthButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LoginPanel() {
    const [globalState, globalActions] = useGlobal();
    const { user } = globalState;
    const { updateGlobalModal, updateGlobalUser, updateGlobalToken } = globalActions;

    const showLogOutModal = () => {
        updateGlobalModal(SIGNOUT)
    }
    const showSignInPopUp = () => {
        updateGlobalModal(SIGNIN)
    }
    const showRegisterPopUp = () => {
        updateGlobalModal(REGISTER)
    }

    
    return (
        user.isAuth ? (
            <AuthButton onClick={showLogOutModal}>
                <FontAwesomeIcon icon={'sign-out-alt'} size={'lg'}/>
            </AuthButton>
        ) :
            (
                <>
                    <AuthButton onClick={showSignInPopUp}>
                        Sign in
                    </AuthButton>
                    <AuthButton onClick={showRegisterPopUp}>
                        Sign up
                    </AuthButton>
                </>
            )
    )
}

export default LoginPanel
