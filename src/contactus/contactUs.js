import React, {useEffect} from 'react'
import './contactUs.css'
// import '../../../Static website/src/themes/dark.css'
function ContactUs() {
    useEffect(() => {
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('contactTab').classList.add('active');
    });
    return (
        <div>
            <div className="container">
                <div className="font-oswald heading"> Contact Us </div>
            </div>
            <div className="formContainer contact-form">
                <div className="field-container">  
                <div className="innerHeading">
                    <p>Your feedback matters. Write to us if you have any questions, queries or suggestions regarding any
                    page/content </p>
                </div>  
                <div className="form">
                    <form className="d-flex flex-direction-column w-100" action="admin@instawash.com" method="post" enctype="text/plain"> 
                        <div className="d-flex flex-direction-row mediaPhone">
                            <input type="text" id="fname" name="fname" placeholder="First Name" required/>
                             <input type="text" id="lname" name="lname" placeholder="Last Name" required/>    
                        </div>
                        <div className="d-flex flex-direction-row mediaPhone">
                            <input type="text" id="email" name="email" placeholder="E-mail" required/>
                            <input type="text" id="PhoneNumber" name="PhoneNumber" placeholder="Phone Number" required/>
                        </div>
                        <div className="d-flex flex-direction-row mediaPhone">
                            <textarea id="query" className="font-roboto" name="query" placeholder="Enter your query" required></textarea>
                        </div>
                        <div className="d-flex flex-direction-row buttons mediaPhone">
                            <button className="btn clear" type="reset">Clear</button>
                            <button className="btn submit" type="submit">Submit</button>
                        </div>
                    </form>   
                </div>
                </div>
            </div>
        </div>
    
    );
}
export default ContactUs