function check_password() {
    if (document.getElementById('password').value == document.getElementById('confirm_password'.value)) {
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('confirm_password').style.borderColor = 'red';
    }
}