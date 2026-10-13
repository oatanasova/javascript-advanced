function focused() {
    let parent = document.querySelector('div');
    
    parent.addEventListener('focus', onFocusIn);
    parent.addEventListener('blur', onFocusOut);

    // let parents = document.querySelectorAll('div div');
    // parents.forEach((parent) => {
    //     parent.addEventListener('focus', onFocusIn);
    //     parent.addEventListener('blur', onFocusOut);
    // });

    function onFocusIn(event){
        event.target.parentElement.className = 'focused';
    }

    function onFocusOut(event){
        event.target.parentElement.className = '';
    }
}