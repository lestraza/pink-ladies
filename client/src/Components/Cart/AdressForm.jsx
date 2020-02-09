import React, { useState } from 'react';
import { createOrder } from '../../UserActions/Actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdressForm = () => {

    const [dataToSubmit, updateDataToSubmit] = useState({
        fullName: '',
        adressLine: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        phoneNumber: ''
    })
    const [isSubmitted, changeIsSubmitted] = useState(false);

 
    const submitForm = (event) => {
        event.preventDefault();
        createOrder(dataToSubmit)
            .then(() => {
                changeIsSubmitted(true)
            })
    }


    const updateData = (event) => {
        const copyDataToSubmit = { ...dataToSubmit };
        const { id, value } = event.target;
        copyDataToSubmit[id] = value;
        console.log(copyDataToSubmit);
        updateDataToSubmit(copyDataToSubmit);

    }

    const selectPaymentMethod = () => {

    }

    const { fullName, adressLine, city, state, zip, country, phoneNumber } = dataToSubmit;
    return (

        <div className='order_options'>
            <div className="adress_container">

                <form onSubmit={submitForm}>
                    <h2>Enter your shipping adress</h2>
                    <input type="text" id="fullName" placeholder="Enter receiver's full name" onChange={updateData} value={fullName} />
                    <input type="text" id="adressLine" placeholder="Adress line 1" onChange={updateData} value={adressLine} />
                    <input type="text" id="city" placeholder="City" onChange={updateData} value={city} />
                    <input type="text" id="state" placeholder="State" onChange={updateData} value={state} />
                    <input type="text" id="zip" placeholder="ZIP code/Postal code" onChange={updateData} value={zip} />
                    <input type="text" id="country" placeholder="Country" onChange={updateData} value={country} />
                    <input type="tel" id="phoneNumber" placeholder="Phone number" onChange={updateData} value={phoneNumber} />
                    <h2>
                            Select payment option
                    </h2>
                    <div className="payment">
                       
                        <div className="payment__container">
                            <input type="radio" name="payment" id="redit_card" onClick={selectPaymentMethod} />
                            <input type="radio" name="payment" id="gift_card" onClick={selectPaymentMethod}/>
                            <label htmlFor="credit_card" className="payment_img">

                                <FontAwesomeIcon icon={["fab", "cc-visa"]} size={"5x"} />
                                <FontAwesomeIcon icon={["fab", "cc-visa"]} size={"5x"} />
                                <FontAwesomeIcon icon={["fab", "cc-amex"]} size={"5x"} />
                            </label>
                            <label htmlFor="gift_card" className="payment_img">
                                <FontAwesomeIcon icon={["fab", "cc-paypal"]} size={"5x"} />
                            </label>
                        </div>

                    </div>
                    {!isSubmitted &&
                        <button type="submit" style={{ margin: "0 auto" }} className="prim-button prim-button--footer">
                            SUBMIT
                    </button>}
                    {isSubmitted &&
                        <button type="submit" style={{ margin: "0 auto" }} className="prim-button prim-button--footer">
                            PAYMENT
                    </button>}

                </form>

            </div>


        </div>

    )
}
export default AdressForm;
