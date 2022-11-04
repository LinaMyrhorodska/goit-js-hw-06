const inputEl = document.querySelector('#name-input');
const textEl = document.querySelector('h1 > span');
console.log(inputEl);
console.log(textEl);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (textEl.textContent = event.currentTarget.value) {
        return textEl.textContent;
    } else {
        return textEl.textContent = `Anonymous`;
    }
}