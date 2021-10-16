function login(element) {
    let userType = element.value;
    localStorage.setItem('userType', userType);
    if(userType === 'manager' || userType === 'admin') {
        window.location.href = '../Manager/manager.html';
    } else if(userType === 'user') { 
        window.location.href = '../Users/users.html';
    } else if (userType === 'visitor') {
        window.location.href = '../Visitor/vistor.html'
    }
}