const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingr = document.querySelector('#ingredients');

const createIngr = ingrEls => {
  const ingrItem = document.createElement('li');
  ingrItem.textContent = ingrEls;
  ingrItem.classList.add('item');
  return ingrItem;
}

const ingredientItems = ingredients.map(createIngr);
ingr.append(...ingredientItems);












