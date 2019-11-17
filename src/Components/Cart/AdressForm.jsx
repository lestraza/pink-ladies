import React, { Component } from 'react';

export default class AdressForm extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="subscribe__agreement">
                    <input type="checkbox" id='agreement' />
                    <label htmlFor="agreement">
                        By submitting my information above, I acknowledge that I have reviewed and hereby agree to the Privacy Policy and Terms of Use.
                    </label>
                </div>
                <button type='submit' className='prim-button prim-button--footer'>SUBMIT</button>
            </React.Fragment>
        )
    }
}
