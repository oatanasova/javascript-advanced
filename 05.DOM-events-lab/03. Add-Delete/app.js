function addItem() {
    //copy from list-of-items
    let input = document.getElementById('newItemText');

    if(!input.value){
        return;
    }

    let item = document.createElement('li');
    item.textContent = input.value;

    //new code

    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    item.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', onDelete);

    function onDelete(event){
        let row = event.target.parentElement;
        row.remove();
    }

    //new code end

    let list = document.getElementById('items')
    list.appendChild(item);

    input.value = '';



}