const valueEl = document.querySelector('#value');
const addClickBtn = document.querySelector('button[data-action="increment"]');
const removeClickBtn = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

function onPlusButtonClick(event) {
    valueEl.textContent = counterValue += 1;
};

function onMinusButtonClick(event) {
    valueEl.textContent = counterValue -= 1;
}

addClickBtn.addEventListener('click', (event) => {
    valueEl.addEventListener('click', onPlusButtonClick(event));
});

removeClickBtn.addEventListener('click', (event) => {
    valueEl.removeEventListener('click', onMinusButtonClick(event));
});
