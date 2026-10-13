function validate() {
    let emailRef = document.getElementById('email');
    let emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    emailRef.addEventListener('change', () => {
        emailRef.classList.toggle('error', !emailPattern.test(emailRef.value));
    });
}