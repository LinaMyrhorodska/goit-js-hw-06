const inputEl = document.querySelector('input');
const inputLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    event.currentTarget.value.length === inputLength
        ? inputEl.classList.add('valid')
        : inputEl.classList.add('invalid');  
}