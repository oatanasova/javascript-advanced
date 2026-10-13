function toggle() {
    // const button = document.getElementById('button');
    const buttonText = document.getElementsByClassName("button")[0];
    const text = document.getElementById('extra');
    // button.style.display = 'none';

    if(text.style.display === 'none'){
        text.style.display = 'block';
        buttonText.textContent = "Less";
    } else {
        text.style.display = 'none';
        buttonText.textContent = "More";
    }
    


    // console.log('TODO:...');
}