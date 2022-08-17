document.getElementById('login-button').addEventListener('click', function(){
    const userField = document.getElementById('user-name');
    const userName = userField.value;
    userField.value = '';

    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    passField.value = '';

    if(userName == 'modasserjasim@gmail.com' && userPass == '12345'){
        window.location.href = 'wallet.html';
    } else{
        alert('Please enter valid Username or Password');
    }
})