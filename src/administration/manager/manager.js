import React, {useEffect, useState} from "react";
import '../administration.css';
import add from '../../assets/images/plus.png';
import deleteIcon from '../../assets/images/delete.png';
import edit from '../../assets/images/edit.png';
import { addCustomer } from '../administration';
import { addDeliveries } from '../administration';
import { addEmployee } from '../administration';
import { addTasks } from '../administration';
import { addEquipment } from '../administration';
import validateSession from "../../session/session";
import axios from "axios";
function Manager () {
    const [orders, setOrders] = useState([]);
    const [equipment, setEquipment] = useState([]);
    const [pickupdelivery, setPickupDelivery] = useState([]);
    const [customer, setCustomer] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [managers, setManager] = useState([]);
     // fetch orders list
    useEffect(() => {
        validateSession('Manager');
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('authenticationTab').classList.add('active');
        updateOrderTable();
    },[]);

    function updateOrderTable() {
        axios({
            method: 'post',
            url: process.env.REACT_APP_API_PATH + '/orders.php',
            headers: {
                'content-type': 'application/json'
            },
            data: {Function: 'getAllOrders'}
        }).then(result => {
            setOrders(result.data);
        }).catch(error => {
        });
    }

    // delete row from given table
    function deleteOrder(elementId) {
        axios({
            method: 'post',
            url: process.env.REACT_APP_API_PATH + '/orders.php',
            headers: {
                'content-type': 'application/json'
            },
            data: {Function: 'deleteOrder', Data:{Order_ID:elementId}}
        }).then(result => {
           orders.splice(orders.findIndex(order => order.Order_ID === elementId),1)
           setOrders(orders);
           updateOrderTable()
        }).catch(error => {
        });
    }

    function editOrderColumn(order) {
        orders.map(order => {if(order.addOrder) {
            order.addOrder = false;
        }});
        order.editOrder = true;
        let index =orders.findIndex(ord => ord.Order_ID === order.Order_ID);
        orders[index] = order;
        setOrders([...orders]);
    }

    function addOrderColumn() {
        if(orders.find(order => order.addOrder)) {
            return;
        }
        let userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
        let order = {
            Order_ID:(Number(orders[orders.length-1].Order_ID)+1).toString(),
            addOrder:true,
            First_Name:'',
            Last_Name:'',
            items:0,
            Service:'Washing',
            Email:'',
            Phonenumber:undefined,
            Customer_ID:userInfo.ID
        }
        orders.push(order);
        setOrders([...orders]);
    }

    function addOrEditOrder(order) {
        axios({
            method: 'post',
            url: process.env.REACT_APP_API_PATH + '/orders.php',
            headers: {
                'content-type': 'application/json'
            },
            data: {Function: (order.editOrder ? 'alterRecord':'addNewOrder'), Data:order}
        }).then(result => {
            order.editOrder = false;
            order.addOrder = false;
           setOrders(orders);
        }).catch(error => {
        });
        updateOrderTable();
    }

    function handleChange(event,order) {
        const { name, value } = event.target;
        orders.forEach((ord) => {if(ord.Order_ID === order.Order_ID){
            ord[name] = value;
        }});
        setOrders([...orders]);
    }
    
    return (
        <section className='administration-bg hide-section'>
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
                                    <th>Order ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Items</th>
                                    <th>Service Type</th>
                                    <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => addOrderColumn()} src={add} height="13px"
                                            width="13px" alt='add records'/></th>
                                </tr>
                                {orders.map(order => 
                                {debugger;   if((order.editOrder || order.addOrder))
                                    return (<tr>
                                    <td>{order.Order_ID}</td>
                                    <td><input type="text" id="fname" name="First_Name" className="font-roboto" placeholder="First Name" value={order.First_Name} onChange={(event) => handleChange(event,order)} required/></td>
                                    <td><input type="text" id="lane"  name="Last_Name" className="font-roboto" placeholder="Last Name" value={order.Last_Name} onChange={(event) => handleChange(event,order)} required/></td>
                                    <td><input type="number" id="Phonenumber" className="font-roboto"  name="Phonenumber" placeholder="Phone Number" value={order.Phonenumber} onChange={(event) => handleChange(event,order)} required/></td>
                                    <td><input type="text" id="Email" className="font-roboto"  name="Email" placeholder="Email" value={order.Email} onChange={(event) => handleChange(event,order)} required/></td>
                                    <td><input type="number" id="noOfItems" name="items" placeholder="Number of Items" value={order.items} onChange={(event) => handleChange(event,order)} required/></td>
                                    <td>
                                    <select name="Service" id="service" className="font-roboto" value={order.Service} onChange={(event) => handleChange(event,order)} required>
                                        <option value="Washing" >Washing</option>
                                        <option value="Drying">Drying</option>
                                        <option value="Ironing">Ironing</option>
                                        <option value="CompleteLaundryService">Complete Laundry Service (Washing+Drying+Ironing)</option>
                                    </select>
                                    </td>
                                    <td>
                                    <span className="action-icons">
                                    <img src={edit} onClick={() => addOrEditOrder(order)} title="Confirm"/>
                                    <img src={deleteIcon} onClick={() => order.editOrder = false} title="Cancel"/>
                                    </span></td>
                                    </tr>); 
                                    else return (
                                    <tr>
                                    <td>{order.Order_ID}</td>
                                    <td>{order.First_Name}</td>
                                    <td>{order.Last_Name}</td>
                                    <td>{order.Phonenumber}</td>
                                    <td>{order.Email}</td>
                                    <td>{order.items}</td>
                                    <td>{order.Service}</td>
                                    <td>
                                    <span className="action-icons">
                                    <img src={edit} onClick={() => editOrderColumn(order)} title="edit"/>
                                    <img src={deleteIcon} onClick={() => deleteOrder(order.Order_ID)} title="delete"/>
                                    </span>
                                    </td>
                                    </tr>)})}
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