import React from 'react'
import './placeorder.css'
function PlaceOrder() {
    return (
        <div>
            <div id="place-order" className="info-content">
                <div className="font-oswald d-flex flex-direction-row w-100  justify-center sideNavHeader"> Place Order </div>
                <div className="form">
                    <form className="d-flex flex-direction-column w-100 align-items-center place-order-form" action="#" method="post" encType="text/plain">
                        <div className="d-flex flex-direction-column order-Container">
                            <div className="d-flex flex-direction-row justify-center media">
                                <input type="text" id="fname"  className="font-roboto" placeholder="First Name" required/>
                                <input type="text" id="lane"  className="font-roboto" placeholder="Last Name" required/>
                            </div>
                            <div className="d-flex flex-direction-row justify-center media">
                                <input type="text" id="email" className="font-roboto"  name="email" placeholder="Email" required/>
                                 <input type="number" id="phoneNumber" className="font-roboto"  name="phoneNumber" placeholder="Phone Number" required/>
                            </div>
                            <div className="d-flex flex-direction-row justify-center media">
                                <select name="service" id="service" className="font-roboto" defaultValue={'DEFAULT'}  required>
                                    <option  value="DEFAULT">Select Required Service</option>
                                    <option value="Washing" >Washing</option>
                                    <option value="Drying">Drying</option>
                                    <option value="Ironing">Ironing</option>
                                    <option value="CompleteLaundryService">Complete Laundry Service (Washing+Drying+Ironing)</option>
                                </select>
                                <input type="number" id="noOfItems" name="Items" placeholder="Number of Items" required/>
                            </div>
                            <div className="d-flex flex-direction-row justify-center media">
                                <textarea id="Instruction" className="font-roboto" name="Instruction" placeholder="Special Instruction"></textarea>
                            </div>
                            <div className="d-flex w-100  flex-direction-row justify-center ">
                                 <button className="btn clear" type="reset">Clear</button>
                                <button className="btn orderButton" type="submit">Place Order</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default PlaceOrder