function validate() {
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');

    let submitBtn = document.getElementById('submit');
    

    let isCompany = document.getElementById('company');
    let companyInfo = document.getElementById('companyInfo');
    let companyNumber = document.getElementById('companyNumber');

    let validDiv = document.getElementById('valid');

    let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
    let passwordPattern = /^\w{5,15}$/;
    let emailPattern = /^[\w_]+@[\w\.]*\.[\w\.]*$/;

    isCompany.addEventListener('change', isChecked);
    submitBtn.addEventListener('click', fieldValidation);


    function isChecked(event) {
        event.target.checked
            ? (companyInfo.style.display = 'block')
            : (companyInfo.style.display = 'none');
    }


    function fieldValidation(event) {
        event.preventDefault();
        let isValid = true;

        if (!usernamePattern.test(username.value)) {
            username.style.borderColor = 'red';
            isValid = false;
        } 

        if (!passwordPattern.test(password.value) && !passwordPattern.test(confirmPassword.value)) {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            isValid = false;
        }

        if (password.value !== confirmPassword.value) {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            isValid = false;
        }

        if (!email.value || !emailPattern.test(email.value)) {
            email.style.borderColor = 'red';
            isValid = false;
        }

        if (isCompany.checked && (companyNumber.value < 1000 || companyNumber.value > 9999)) {
            companyNumber.style.borderColor = 'red';
            isValid = false;
        }

        if (isValid) {
            validDiv.style.display = 'block';
            username.style.borderColor = '';
            password.style.borderColor = '';
            confirmPassword.style.borderColor = '';
            email.style.borderColor = '';
            companyNumber.style.borderColor = '';
        } else {
            validDiv.style.display = 'none';
        }
    }
}
