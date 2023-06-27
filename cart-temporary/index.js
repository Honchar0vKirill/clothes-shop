const reduceButton = document.querySelector('.str-m');
const increaseButton = document.querySelector('.str-p');
const numberDisplay = document.querySelector('.number-num');
const priceDisplay = document.querySelector('.price-text');
const endPriceDisplay = document.querySelector('.end-price');
let quantity = 1;
let price = 3500;
let priceolso

function updateDisplay() {
  numberDisplay.textContent = quantity;
  priceDisplay.textContent = `${price}грн`;
  updateEndPrice();

  // Save values to localStorage
  localStorage.setItem('quantity', quantity);
  localStorage.setItem('price', price);
}