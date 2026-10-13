function addItem() {
    let input = document.getElementById('newItemText');

    let item = document.createElement('li');
    item.textContent = input.value;

    if(!input.value){
        return;
    }

    let list = document.getElementById('items')
    list.appendChild(item);

    input.value = '';

}