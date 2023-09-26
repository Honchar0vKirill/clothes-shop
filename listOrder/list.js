const orderInfoContainer = document.querySelector('.order-data');
const nameElement = document.getElementById('name');
const cityElement = document.getElementById('city');
const finalPriceElement = document.getElementById('finalPrice');

const orders = JSON.parse(localStorage.getItem('orders')) || [];
const selectedOrder = orders[0]; 

function displayOrderDetails(orderData) {
  nameElement.textContent = orderData.surname;
  cityElement.textContent = orderData.delivery.city;
  finalPriceElement.textContent = orderData.finishPrice;
}
displayOrderDetails(selectedOrder)
