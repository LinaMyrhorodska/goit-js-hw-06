const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length);


const firstCategory = document.querySelector('h2');
const animals = firstCategory.firstChild;
console.log('Category:', animals.textContent);

const allElements = document.querySelector('.item');
const els1 = allElements.lastElementChild;
console.log('Elements:', els1.children.length);


const secondCategory = document.querySelector('.item');
const products = secondCategory.nextElementSibling;
console.log('Category:', products.firstElementChild.textContent);

const els2 = products.lastElementChild;
console.log('Elements:', els2.children.length);


const ThirdCategory = document.querySelector('.item');
const technologies = products.nextElementSibling;
console.log('Category:', technologies.firstElementChild.textContent);

const els3 = technologies.lastElementChild;
console.log('Elements:', els3.children.length);