import React, {useEffect} from "react";
import '../administration.css';
import add from '../../assets/images/plus.png';
import { addCustomer } from '../administration';
import { addDeliveries } from '../administration';
import { addEmployee } from '../administration';
import { addOrder } from '../administration';
import { addTasks } from '../administration';
import { addEquipment } from '../administration';
import { populateTables } from "../administration";
function Manager () {
    useEffect(() => {
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('authenticationTab').classList.add('active');
        document.getElementById('authenticationTab').childNodes[0].innerText = 'Manager';
    });
    setTimeout(()=> {
        populateTables();
    },500);
    return (
        <section className='administration-bg'>
         {/* Header section title */}
        <div className="container" id="heading-container">
            <div className="font-oswald heading"> Manage Daily Tasks </div>
        </div>

        {/* Admin and manager section tables structure  */}
        <div className="manage-container d-flex flex-direction-column align-items-around justify-evenly">

             {/* Horizontal row section containing multiple tables  */}
            <div className="d-flex flex-direction-row justify-around section-container">

                 {/* Manage Order table  */}
                <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Order</span>
                    <div className="table-container">
                        <table id="order-table" className="material-table">
                            <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>Order#</th>
                                    <th>Customer Name</th>
                                    <th>Phone</th>
                                    <th>Type</th>
                                    <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => addOrder()} src={add} height="13px"
                                            width="13px" alt='add records'/></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                 {/* Manage equipment table  */}
                <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Equipment</span>
                    <div className="table-container">
                        <table id="equipment-table" className="material-table">
                        <tbody>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Order#</th>
                                <th>Customer</th>
                                <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                        onClick={addEquipment} src={add} height="13px"
                                        width="13px" alt='add-record'/></th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

             {/* Horizontal row section containing multiple tables  */}
            <div className="d-flex flex-direction-row justify-around section-container" id="manager-actions">

                 {/* Manual Order table  */}
                <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manual Order</span>
                    <div className="d-flex flex-direction-row order-container">
                        <div className="d-flex flex-direction-column justify-between">
                            <input type="text" placeholder="Customer Name" required="required"/>
                            <input type="text" placeholder="Phone Number" required="required" maxLength="10"/>
                            <label>Service Type:</label>
                            <select name="services" id="services">
                                <option value="Washing">Washing</option>
                                <option value="Drying">Drying</option>
                                <option value="Ironing">Ironing</option>
                                <option value="Pickup">Pickup</option>
                                <option value="Delivery">Delivery</option>
                            </select>
                        </div>
                        <div className="d-flex flex-direction-column justify-between">
                            <input type="text-area" placeholder="Description"/>
                            <input type="submit" className="btn submit-order"/>
                        </div>
                    </div>
                </div>

                 {/* Manage tasks table  */}
                <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Tasks</span>
                    <div className="table-container">
                        <table id="tasks-table" className="material-table">
                        <tbody>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Assigned to</th>
                                <th>Desc</th>
                                <th>Services</th>
                                <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                        onClick={addTasks} src={add} height="13px"
                                        width="13px" alt='add-record'/></th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

             {/* Horizontal row section containing multiple tables  */}
            <div className="d-flex flex-direction-row justify-around section-container">

                 {/* Manage Customers table  */}
                <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Customers</span>
                    <div className="table-container">
                        <table id="customer-table" className="material-table">
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Email</th>
                                    <th>Phone no</th>
                                    <th>Gender</th>
                                    <th className="text-align-center"><img className="cursor-pointer" onClick={addCustomer}
                                            title="Add Record" src={add} height="13px"
                                            width="13px" alt='add-record'/></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                 {/* Manage Pickup/Delivery table  */}
                <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Pickup / Delivery</span>
                    <div className="table-container">
                        <table id="delivery-table" className="material-table">
                        <tbody>
                            <tr>
                                <th>#</th>
                                <th>Order#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone no</th>
                                <th>Assigned to</th>
                                <th>Service type</th>
                                <th className="text-align-center"><img className="cursor-pointer" onClick={addDeliveries}
                                        title="Add Record" src={add}
                                        height="13px" width="13px" alt='add-record'/></th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

             {/* Horizontal row section containing Employee table  */}
            <div className="d-flex flex-direction-row justify-around section-container" id='employee-table-container'>
                <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Employees</span>
                    <div className="table-container">
                        <table id="employee-table" className="material-table">
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Phone no</th>
                                    <th>Gender</th>
                                    <th className="text-align-center"><img className="cursor-pointer" onClick={addEmployee}
                                            title="Add Record" src={add} height="13px"
                                            width="13px" alt='add-record'/></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}
export default Manager;