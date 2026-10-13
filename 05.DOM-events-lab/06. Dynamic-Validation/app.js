function validate() {
    let input = document.getElementById('email');
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    
    
    input.addEventListener('change', () => {
        let isValid = pattern.test(input.value);
        if (!isValid) {
            input.className = 'error';
        } else {
            input.className = '';
        }
    });
}