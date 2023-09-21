const baseUrlOrder = "http://localhost:4000/orders";
const orderInfoContainer = document.querySelector(".order-data");
const nameElement = document.getElementById("name");
const cityElement = document.getElementById("city");
const finalPriceElement = document.getElementById("finalPrice");


function fetchAndDisplayOrderDetails() {
  axios.get(`${baseUrlOrder}/list`)
    .then((res) => {
      const orderDetails = res.data; 
      nameElement.textContent = orderDetails.name;
      cityElement.textContent = orderDetails.delivery.city;
      finalPriceElement.textContent = orderDetails.finishPrice;
      
    })
    .catch((error) => {
      console.error("Error fetching order details:", error);
    });
}



window.onload = fetchAndDisplayOrderDetails;
