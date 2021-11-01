import React, {useEffect} from 'react'
import UserSideMenu from '../sideMenuBar/SideMenuBar'
function User () {
    useEffect(() => {
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('authenticationTab').classList.add('active');
        document.getElementById('authenticationTab').childNodes[0].innerText = 'User';
    });
    return(
        <UserSideMenu/>
    )
}
export default User