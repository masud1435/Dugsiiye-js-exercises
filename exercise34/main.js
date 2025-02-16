const list = document.querySelector('#list');
function addItem(){
    const addItem = document.createElement('h2');
    addItem.textContent = 'New Item';
    list.appendChild(addItem);
}

function removeItem(){
    const list = document.querySelector('#list');
    if(list.lastChild) {
        list.removeChild(list.lastChild);
    }
}