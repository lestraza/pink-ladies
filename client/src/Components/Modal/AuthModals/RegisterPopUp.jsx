import React, { useState } from 'react';

import { registerRequest } from '../../../UserActions/Actions';

function RegisterPopUp(props) {

    const [dataToSubmit, updateDataToSubmit] = useState({
        name: '',
        lastname: '',
        email: '',
        password: ''
    })

    const [success, updateSuccess] = useState(false);

    const [error, updateError] = useState(false);

    const updateData = (event) => {
        const copyDataToSubmit = { ...dataToSubmit };
        const { id, value } = event.target;
        copyDataToSubmit[id] = value;
        updateDataToSubmit(copyDataToSubmit);
    }

    const submitForm = (event) => {
        event.preventDefault();        
        registerRequest({...dataToSubmit, cart: []})
            .then(response => {
                updateSuccess(true);
            }).catch(err => {
                updateError(true);
            })
    }
    const { email, lastname, name, password} = dataToSubmit;

    return (
        <div className="modal__content">
            <form onSubmit={submitForm}>
                <input type="text" id='name' placeholder='Enter your name' onChange={updateData} value={name} />
                <input type="text" id='lastname' placeholder='Enter your lastname' onChange={updateData} value={lastname} />
                <input type="email" id='email' placeholder='Enter your email' onChange={updateData} value={email} />
                <input type="password" id='password' placeholder='Enter your password' onChange={updateData} value={password} />
                <button type='submit' style={{margin: '0 auto'}} className='prim-button prim-button--footer'>
                    REGISTER
            </button>
            </form>
            {success &&
                <div className='message message--success'>
                    Congratulations!! You are successfully registered
                </div>
            }
            {error &&
                <div className='message message--error'>
                Sorry! Try register again
                </div>
            }
            
        </div>
    )
}

export default RegisterPopUp;
