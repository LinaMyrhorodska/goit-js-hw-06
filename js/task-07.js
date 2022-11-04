const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

function onMouseRange() {
    textEl.style.fontSize = inputEl.value + 'px';
}

inputEl.addEventListener('mousemove', onMouseRange);