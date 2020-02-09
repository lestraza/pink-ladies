import React, { useState} from 'react';
import { useGlobal } from '../../StateStore/StateStore';
import { REGISTER, SIGNIN, SIGNOUT, titles } from './constants';
import RegisterPopUp from './AuthModals/RegisterPopUp';
import SignoutPopUp from './AuthModals/SignoutPopUp';
import SigninPopUp from './AuthModals/SigninPopUp';
import { Fade } from 'react-reveal';

function Modal() {
    const [globalState, globalActions] = useGlobal();    
    const { modal } = globalState;
    const { updateGlobalModal } = globalActions;
    
    const onClickClose = (e) => {
        const {classList} = e.target
        if (classList.contains('mask') || classList.contains('modal__close')) {
            updateGlobalModal('')
        }        
    }

    const renderModal = () => {
        switch (modal) {
            case REGISTER: {                           
                return (
                    <RegisterPopUp />
                )
            }
            case SIGNOUT: {                
                return (
                    <SignoutPopUp />
                )
            }
            case SIGNIN: {                
                return (
                    <SigninPopUp />
                )
            }
        }
    }
    
    return (
        !!modal && (
            <Fade>
                <div className="mask" onClick={onClickClose}>
                    <div className='modal'>
                        <div className="modal__header">
                            <div className="modal__title">{titles[modal]}</div>
                            <div className="modal__close" onClick={onClickClose}></div>                        
                        </div>
                        {renderModal()}
                    </div>
                </div>
            </Fade>
        )
    )
}

export default Modal;
