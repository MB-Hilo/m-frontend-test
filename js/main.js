const shuffleContent = (selector) => {
  const items = document.querySelectorAll(selector);

  // loops through all the elements with 'card-list__item
  items.forEach((item) => {
    item.style.order = Math.ceil(Math.random(items.length) * items.length);
  });
}

const sortContent = () => {
  const items = document.querySelectorAll('.card-list__item');
  items.forEach((item) => {
    item.style.order = 1;
  });

}

document.getElementById('shuffle').onclick = () => shuffleContent('.card-list__item');

document.getElementById('sort').onclick = () => sortContent();



