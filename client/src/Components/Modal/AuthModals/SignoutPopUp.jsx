import React from 'react';
import { useGlobal } from '../../../StateStore/StateStore';

function SignoutPopUp() {

    const [globalState, globalActions] = useGlobal();
    const { user, prodsInCart } = globalState;
    const { updateGlobalModal, updateGlobalToken, updateGlobalUser, updateItemsInCart } = globalActions;
  
    const deleteCookie = (name) => {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    const logOut = () => {
        localStorage.removeItem('user_token');
        deleteCookie('user_token');
        updateGlobalToken('');
        updateGlobalModal('');
        updateItemsInCart([])
        updateGlobalUser('');
    }

    const closeModal = () => {        
        updateGlobalModal('');        
    }
    
    return (
        <>
            <div className='modal__content'>
                <div className="modal__confirm">
                    Are you sure ?
                </div>                
            </div>
            <div className="modal__footer">
                <div className="modal__footer-buttons">
                    <button className='sec-button' onClick={closeModal}>CANCEL</button>
                    <button className='prim-button' onClick={logOut}>SIGN OUT</button>
                </div>
            </div>
        </>
    )
}

export default SignoutPopUp;
