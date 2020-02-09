import React, { useState } from 'react';
import { signInRequest, getCartItems } from '../../../UserActions/Actions';
import { useGlobal } from '../../../StateStore/StateStore';

function SigninPopUp() {
    const [dataToSubmit, updateDataToSubmit] = useState({
        email: '',
        password: ''
    })

    const [globalState, globalActions] = useGlobal();
    const { updateGlobalToken, updateGlobalModal, updateItemsInCart } = globalActions;
    const { modal } = globalState;

    const [success, updateSuccess] = useState(false);
    const [error, updateError] = useState('');

    const updateData = (event) => {
        const copyDataToSubmit = { ...dataToSubmit };
        const { id, value } = event.target;
        copyDataToSubmit[id] = value;
        updateDataToSubmit(copyDataToSubmit);
    }

    const submitForm = (event) => {
        event.preventDefault();
        signInRequest(dataToSubmit)
            .then(response => {
                updateError('');
                const { token } = response.data
                localStorage.setItem('user_token', token);
                updateGlobalToken(token);
                updateSuccess(true);
                setTimeout(() => {
                    updateGlobalModal('')

                    getCartItems()
                        .then(response => {
                            updateItemsInCart(response.data);
                        })
                        .catch(err => {
                            console.error(err);
                        })
                }, 700);

            }).catch(err => {
                updateError(err.response.data.message);
            })
    }
    return (
        <form onSubmit={submitForm}>
            <div className="modal__content">
                <input type="email" id='email' placeholder='Enter your email' onChange={updateData} />
                <input type="password" id='password' placeholder='Enter your password' onChange={updateData} />
            </div>
            <div className="modal__footer">
                <div className="modal__footer-buttons">
                    <button type='submit' className='prim-button prim-button--footer'>
                        SIGN IN
                </button>
                </div>
                {success && (<div className='message message--success' >
                    You successfully login!
                </div>)}
                {error && (<div className='message message--error'>
                    {error}
                </div>)}
            </div>
        </form>
    )
}

export default SigninPopUp;
