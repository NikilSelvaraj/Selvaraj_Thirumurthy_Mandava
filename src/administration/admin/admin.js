import React, {useEffect} from "react";
import '../administration.css'
import add from '../../assets/images/plus.png';
import customerGraph from '../../assets/images/customer-graph-1.png';
import businessGraph from '../../assets/images/business-graph.svg';
import stackedArea from '../../assets/images/700px-7.1_stacked_area_chart.png';
import { addCustomer } from '../administration';
import { addDeliveries } from '../administration';
import { addEquipment } from '../administration';
import { addOrder } from '../administration';
import { addManager } from '../administration';
import { populateTables } from "../administration";
function Admin () {
    var slideIndex = 1;
    useEffect(() => {
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('authenticationTab').classList.add('active');
        document.getElementById('authenticationTab').childNodes[0].innerText = 'Admin';
    });
    setTimeout(()=> {
        populateTables();
        showSlides(slideIndex);
    },500);

     // Thumbnail image controls
     function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slides");
        var pills = document.getElementsByClassName("pills");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < pills.length; i++) {
            pills[i].className = pills[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "flex";
        pills[slideIndex - 1].className += " active";
    }
    return (
      <section className='administration-bg'>
      <div className="container" id="heading-container">
            <div className="font-oswald heading"> Instawash Admin </div>
        </div>
       {/* Admin page graph ans stats */}
        <div id="graph-view" className="graph-view d-flex flex-direction-column w-100">
            <div className="d-flex w-100 number-container">
                <div className="number-card font-oswald">
                    <span>Total No of users:</span>
                    <span className="font-roboto">598</span>
                </div>
                <div className="number-card font-oswald">
                    <span>Active users:</span>
                    <span className="font-roboto">422</span>
                </div>
                <div className="number-card font-oswald">
                    <span>Total No of employees:</span>
                    <span className="font-roboto">13</span>
                </div>
                <div className="number-card font-oswald">
                    <span>No of Equipments available:</span>
                    <span className="font-roboto">45</span>
                </div>
            </div>
            <div className="carousel-container admin-container d-flex flex-direction-column align-items-center">
                <div className="slides fade w-100">
                    <img src={customerGraph} alt='add-record'/>
                </div>

                <div className="slides fade w-100">
                    <img src={businessGraph} alt='add-record'/>
                </div>

                <div className="slides fade w-100">
                    <img src={stackedArea} alt='add-record'/>
                </div>

                {/* The pills  */}
                <div className="pill-container">
                    <span className="pills" onClick={() => currentSlide(1)}></span>
                    <span className="pills" onClick={() => currentSlide(2)}></span>
                    <span className="pills" onClick={() => currentSlide(3)}></span>
                </div>
            </div>
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
                                            onClick={addOrder} src={add} height="13px"
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

             {/* Horizontal row section containing Manager table  */}
            <div className="d-flex flex-direction-row justify-around section-container" id='manager-table-container'>
                <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Managers</span>
                    <div className="table-container">
                        <table id="manager-table" className="material-table">
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Phone no</th>
                                    <th>Gender</th>
                                    <th>Position</th>
                                    <th>Location</th>
                                    <th className="text-align-center"><img className="cursor-pointer" onClick={addManager}
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
export default Admin;