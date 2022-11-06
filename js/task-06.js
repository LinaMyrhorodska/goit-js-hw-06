const inputEl = document.querySelector('input');
const inputLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === inputLength) {
        event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
}