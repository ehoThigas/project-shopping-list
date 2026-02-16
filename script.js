const form = document.querySelector('form');
const itemInput = document.querySelector('#item');
const quantityInput = document.querySelector('#quantity');
const shoppingList = document.querySelector('#shopping-list');
const clearList = document.querySelector('#clear');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const itemName = itemInput.value;
    const itemQnt = quantityInput.value;

    if(itemInput.value.trim() === '') return;

    createListItem(itemQnt, itemName);

    form.reset();
    itemInput.focus();
})

clearList.addEventListener("click", () => shoppingList.innerHTML = "");

function createListItem(qnt, name){
    const li = document.createElement('li');

    li.innerHTML = `
        <div class="item-info">
            <input type="checkbox">
            <span><strong>${qnt}</strong> x ${name}</span>
        </div>
        <button class="delete-btn">
            <span class="material-symbols-outlined">close</span>
        </button>
    `;

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.onclick = () => li.remove();

    shoppingList.appendChild(li);
}