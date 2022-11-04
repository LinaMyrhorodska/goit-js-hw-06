const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingr = document.querySelector('#ingredients');
const allIngr = ingredients.length;
for (let i = 0; i < ingredients.length; i += 1) {
  const ingrEl = document.createElement('li');
  ingrEl.textContent = ingredients[i];
  ingrEl.classList.add('item');
  ingr.append(ingrEl);
}

