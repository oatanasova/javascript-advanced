function deleteByEmail() {
    let input = document.querySelector('[name="email"]');
    let pattern = input.value;

    let tableRowRef = Array.from(document.querySelector('tbody').children);

    let found = false;

    for( let row of tableRowRef){
        if(row.children[1].textContent == pattern){
            row.remove();
            found = true;
        }
    }

    let output = document.getElementById('result');

    if(found){
        output.textContent = "Deleted.";
        input.value = '';
    } else {
        output.textContent = 'Not found.'
    }
}