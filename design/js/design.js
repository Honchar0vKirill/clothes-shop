// Отримуємо посилання на необхідні елементи
const lastNameInput = document.getElementById('lastNameInput');
const firstNameInput = document.getElementById('firstNameInput');
const phoneInput = document.getElementById('phoneInput');
const emailInput = document.getElementById('emailInput');
const rejectButton = document.getElementById('rejectButton');
const saveButton = document.getElementById('saveButton');

// Зчитуємо дані з localStorage та заповнюємо поля вводу
const savedData = JSON.parse(localStorage.getItem('formData'));
if (savedData) {
  lastNameInput.value = savedData.lastName;
  firstNameInput.value = savedData.firstName;
  phoneInput.value = savedData.phone;
  emailInput.value = savedData.email;
}

// Обробник події для кнопки "Зберегти"
saveButton.addEventListener('click', () => {
  const formData = {
    lastName: lastNameInput.value,
    firstName: firstNameInput.value,
    phone: phoneInput.value,
    email: emailInput.value
  };

  // Зберігаємо дані в localStorage у форматі JSON
  localStorage.setItem('formData', JSON.stringify(formData));
});

// Обробник події для кнопки "Відхілити"
rejectButton.addEventListener('click', () => {
  // Видаляємо дані з localStorage та очищуємо поля вводу
  localStorage.removeItem('formData');
  lastNameInput.value = '';
  firstNameInput.value = '';
  phoneInput.value = '';
  emailInput.value = '';
});


const checkbox1 = document.getElementById('checkId1');
const checkbox2 = document.getElementById('checkId2');
const select1 = document.querySelector('#selectContainer1');
const select2 = document.querySelector('#selectContainer2');

// Отримуємо збережені значення з localStorage
const checkbox1State = localStorage.getItem('checkbox1State');
const checkbox2State = localStorage.getItem('checkbox2State');
const selectValue = localStorage.getItem('selectValue');

// Відновлюємо стан галочок
if (checkbox1State === 'checked') {
  checkbox1.checked = true;
  select1.innerHTML = `
    <div class="select-block">
        <select class="select" id="select1">
            <option value="1">Виберіть відділення</option>
            <option value="2">Львів</option>
            <option value="3">Суми</option>
            <option value="4">Київ</option>
            <option value="5">Чернігів</option>
            <option value="6">Ужгород</option>
            <option value="7">Луцьк</option>
            <option value="8">Одеса</option>
            <option value="9">Миколаїв</option>
            <option value="10">Дніпропетровськ</option>
            <option value="11">Херсон</option>
            <option value="12">Полтава</option>
            <option value="13">Івано-Франківськ</option>
        </select>
    </div>
  `;
} else {
  checkbox1.checked = false;
  select1.innerHTML = null;
}

if (checkbox2State === 'checked') {
  checkbox2.checked = true;
  select2.innerHTML = `
    <div class="select-block">
        <select class="select" id="select2">
            <option value="1">Виберіть відділення</option>
            <option value="2">Львів</option>
            <option value="3">Суми</option>
            <option value="4">Київ</option>
            <option value="5">Чернігів</option>
            <option value="6">Ужгород</option>
            <option value="7">Луцьк</option>
            <option value="8">Одеса</option>
            <option value="9">Миколаїв</option>
            <option value="10">Дніпропетровськ</option>
            <option value="11">Херсон</option>
            <option value="12">Полтава</option>
            <option value="13">Івано-Франківськ</option>
        </select>
    </div>
  `;
} else {
  checkbox2.checked = false;
  select2.innerHTML = null;
}

// Відновлюємо значення select
if (selectValue) {
  const select = checkbox1.checked ? document.getElementById('select1') : document.getElementById('select2');
  select.value = selectValue;
}

checkbox1.addEventListener('change', (e) => {
  if (e.target.checked) {
    checkbox2.checked = false;
    select2.innerHTML = null;
    select1.innerHTML = `
      <div class="select-block">
          <select class="select" id="select1">
              <option value="1">Виберіть відділення</option>
              <option value="2">Львів</option>
              <option value="3">Суми</option>
              <option value="4">Київ</option>
              <option value="5">Чернігів</option>
              <option value="6">Ужгород</option>
              <option value="7">Луцьк</option>
              <option value="8">Одеса</option>
              <option value="9">Миколаїв</option>
              <option value="10">Дніпропетровськ</option>
              <option value="11">Херсон</option>
              <option value="12">Полтава</option>
              <option value="13">Івано-Франківськ</option>
          </select>
      </div>
    `;
    // Зберігаємо стан галочок в localStorage
    localStorage.setItem('checkbox1State', 'checked');
    localStorage.removeItem('checkbox2State');
  } else {
    select1.innerHTML = null;
    // Видаляємо стан галочки з localStorage
    localStorage.removeItem('checkbox1State');
  }
});

checkbox2.addEventListener('change', (e) => {
  if (e.target.checked) {
    checkbox1.checked = false;
    select1.innerHTML = null;
    select2.innerHTML = `
      <div class="select-block">
          <select class="select" id="select2">
              <option value="1">Виберіть відділення</option>
              <option value="2">Львів</option>
              <option value="3">Суми</option>
              <option value="4">Київ</option>
              <option value="5">Чернігів</option>
              <option value="6">Ужгород</option>
              <option value="7">Луцьк</option>
              <option value="8">Одеса</option>
              <option value="9">Миколаїв</option>
              <option value="10">Дніпропетровськ</option>
              <option value="11">Херсон</option>
              <option value="12">Полтава</option>
              <option value="13">Івано-Франківськ</option>
          </select>
      </div>
    `;
    // Зберігаємо стан галочок в localStorage
    localStorage.setItem('checkbox2State', 'checked');
    localStorage.removeItem('checkbox1State');
  } else {
    select2.innerHTML = null;
    // Видаляємо стан галочки з localStorage
    localStorage.removeItem('checkbox2State');
  }
});

// Зберігаємо значення select при зміні
select1.addEventListener('change', (e) => {
  const select = e.target;
  const selectValue = select.value;
  localStorage.setItem('selectValue', selectValue);
});

select2.addEventListener('change', (e) => {
  const select = e.target;
  const selectValue = select.value;
  localStorage.setItem('selectValue', selectValue);
});




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












function updateEndPrice() {
  const endPrice = price * quantity;
  endPriceDisplay.textContent = `${price}грн`;
}

if (localStorage.getItem('quantity')) {
  quantity = parseInt(localStorage.getItem('quantity'));
}

if (localStorage.getItem('price')) {
  price = parseInt(localStorage.getItem('price'));
}

reduceButton.addEventListener('click', function() {
  if (quantity > 1) {
    quantity--;
    price -= 3500;
    updateDisplay();
  }
});

increaseButton.addEventListener('click', function() {
  quantity++;
  price += 3500;
  updateDisplay();
});

updateDisplay();















// Функція для збереження стану галочки в localStorage
function saveCheckboxState(checkboxId, localStorageKey) {
  const checkbox = document.getElementById(checkboxId);
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      localStorage.setItem(localStorageKey, 'true');
      clearOtherCheckboxes(checkboxId);
    } else {
      localStorage.removeItem(localStorageKey);
    }
  });
}

// Функція для очищення інших галочок
function clearOtherCheckboxes(checkedCheckboxId) {
  const checkboxes = document.querySelectorAll('.pay-chek');
  checkboxes.forEach(function(checkbox) {
    if (checkbox.id !== checkedCheckboxId) {
      checkbox.checked = false;
      const localStorageKey = checkbox.id;
      localStorage.removeItem(localStorageKey);
    }
  });
}

// Зберігаємо стан галочок при їх зміні
saveCheckboxState('paymentOption1', 'paymentOption1');
saveCheckboxState('paymentOption2', 'paymentOption2');
saveCheckboxState('paymentOption3', 'paymentOption3');

// Відновлюємо стан галочок після оновлення сторінки
document.addEventListener('DOMContentLoaded', function() {
  const checkbox1 = document.getElementById('paymentOption1');
  const checkbox2 = document.getElementById('paymentOption2');
  const checkbox3 = document.getElementById('paymentOption3');

  checkbox1.checked = JSON.parse(localStorage.getItem('paymentOption1')) || false;
  checkbox2.checked = JSON.parse(localStorage.getItem('paymentOption2')) || false;
  checkbox3.checked = JSON.parse(localStorage.getItem('paymentOption3')) || false;
});



const inputs = document.querySelectorAll('.input-class');

// Load input values from localStorage or set default values
inputs.forEach((input) => {
  const inputId = input.id;
  input.value = localStorage.getItem(inputId) || '';

  // Save input values to localStorage on input change
  input.addEventListener('input', () => {
    localStorage.setItem(inputId, input.value);
  });
});

const endBtnTrue = document.querySelector('.end-btn-true');

endBtnTrue.addEventListener('click', () => {
  const formData = {
    contactData: {
      lastName: lastNameInput.value,
      firstName: firstNameInput.value,
      phone: phoneInput.value,
      email: emailInput.value
    },
    quantity: quantity,
    city: selectValue,
    recipientData: {
     
    }
  };
  localStorage.setItem('orderData', JSON.stringify(formData));

  const buttonHTML = `
          <button style="width: 150px;
                        height: 40px;
                        background-color: #2E2727;
                        border: #A0A0A0 1px solid;
                        border-radius: 10px;
                        color: #A0A0A0;
                        cursor: pointer;
                        margin-left: 25%;">
            На головну
          </button>
        `;

    document.body.innerHTML += buttonHTML;


 
  
  document.body.innerHTML = '';
  document.body.style.backgroundColor = '#2E2727';

  const thankYouText = document.createElement('h1');

  document.body.style.height = '738px';
  thankYouText.style.marginLeft = '25%';
  thankYouText.style.color = 'white';
  thankYouText.textContent = 'Дякуємо за замовлення';
  
  document.body.appendChild(thankYouText);
});




const endBtnFalse = document.querySelector('.end-btn-false');

endBtnFalse.addEventListener('click', () => {
  // Видаляємо дані з localStorage
  localStorage.removeItem('orderData');
});



function clearLocalStorageAndRefresh() {
  localStorage.clear();
  location.reload();
}



