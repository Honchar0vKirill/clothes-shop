let modal = document.getElementById("modal");
let button = document.querySelector(".buttonBlockABC");
let closeBtn = document.querySelector(".close");
let nameInput = document.querySelector(".NameAbc");
let phoneNumberInput = document.querySelector(".phoneNumberAbc");
let mailInput = document.querySelector(".MailAbc");

// Функція, яка зберігає дані в localStorage
function saveData() {
  localStorage.setItem("name", nameInput.value);
  localStorage.setItem("phoneNumber", phoneNumberInput.value);
  localStorage.setItem("mail", mailInput.value);
}

// Функція, яка заповнює поля вводу збереженими значеннями з localStorage
function loadData() {
  nameInput.value = localStorage.getItem("name");
  phoneNumberInput.value = localStorage.getItem("phoneNumber");
  mailInput.value = localStorage.getItem("mail");
}

button.addEventListener("click", function() {
  modal.style.display = "block";
  loadData(); // Завантажуємо збережені дані при відкритті модального вікна
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
  saveData(); // Зберігаємо дані при закритті модального вікна
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    saveData(); // Зберігаємо дані при кліку поза модальним вікном
  }
});
button.addEventListener("click", function() {
  modal.style.display = "block";
  loadData(); // Load saved data when opening the modal
});

// Add event listener to the save button
let saveButton = document.querySelector(".saveButton");
saveButton.addEventListener("click", function() {
  saveData(); // Save data when the save button is clicked
  modal.style.display = "none";
});