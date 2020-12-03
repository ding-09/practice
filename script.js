const productsBtn = document.querySelector('.products');
const dropdowns = document.querySelector('.dropdowns');
const productsDropdown = document.querySelector('.products-dropdown');
const learnDropdown = document.querySelector('#learn-dropdown');

const mainHeader = document.querySelector('.main-header');

mainHeader.addEventListener('click', (e) => {
  if (e.target.classList.contains('products')) {
    if (learnDropdown.style.display == 'flex') {
      learnDropdown.style.display = 'none';
    }
    dropdowns.style.display = 'block';
    productsDropdown.style.display = 'flex';
  } else if (e.target.classList.contains('learn')) {
    if (productsDropdown.style.display == 'flex') {
      productsDropdown.style.display = 'none';
    }
    dropdowns.style.display = 'block';
    learnDropdown.style.display = 'flex';
  } 
});
