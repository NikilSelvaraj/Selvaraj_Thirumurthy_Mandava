import React from 'react'
import VisitorSideMenu from '../visitorSideMenuBar/visitorsidemenu'
function Visitor () {
    useEffect(() => {
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('authenticationTab').classList.add('active');
        document.getElementById('authenticationTab').childNodes[0].innerText = 'Visitor';
    });
    return(
        <VisitorSideMenu/>
    )
}
export default Visitor