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


// Get the product information from localStorage
const cartItems = JSON.parse(localStorage.getItem('cartItems'));
if (cartItems && cartItems.length > 0) {
    // Assuming the first item in cartItems contains the product information
    const selectedProduct = cartItems[0];

    // Update the content of the productName, productPrice, and productImage elements
    const productNameElement = document.getElementById('productName');
    const productPriceElement = document.getElementById('productPrice');
    const productImageElement = document.getElementById('productImage');

    if (productNameElement) {
        productNameElement.textContent = selectedProduct.name;
    }
    if (productPriceElement) {
        productPriceElement.textContent = `${selectedProduct.price}грн`;
    }
    if (productImageElement) {
        productImageElement.src = selectedProduct.img;
    }
}





const reduceButton = document.querySelector('.str-m');
const increaseButton = document.querySelector('.str-p');
const numberDisplay = document.querySelector('.number-num');
const priceDisplay = document.querySelector('#productPrice');
const endPriceDisplay = document.querySelector('.end-price');
let quantity = 1;
let price = 1500
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
    price -= 1500 ;
    updateDisplay();
  }
});

increaseButton.addEventListener('click', function() {
  quantity++;
  price += 1500;
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
      orderForm.payType = checkboxId; 
    } else {
      localStorage.removeItem(localStorageKey);
      orderForm.payType = null;
    }
  })
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

inputs.forEach((input) => {
  const inputId = input.id;
  input.value = localStorage.getItem(inputId) || '';

  input.addEventListener('input', () => {
    localStorage.setItem(inputId, input.value);
  });
});

saveCheckboxState('paymentOption1', 'paymentOption1');
saveCheckboxState('paymentOption2', 'paymentOption2');
saveCheckboxState('paymentOption3', 'paymentOption3')






const endBtnFalse = document.querySelector('.end-btn-false');

endBtnFalse.addEventListener('click', () => {
  // Видаляємо дані з localStorage
  localStorage.removeItem('orderData');
});


function clearLocalStorageAndRefresh() {
  localStorage.clear();
  location.reload();
  window.location.href = "http://127.0.0.1:5501/design/design.html";
}




const baseUrlOrder = "http://localhost:4000/orders" 



const orderForm = {
  name: document.querySelector('#lastNameInput'),
  surname: document.getElementById('firstNameInput'),
  phone: document.getElementById('phoneInput'),
  email: document.getElementById('emailInput'),
  count: document.querySelector('.number-num'),
  delivery: {
     typeDel: null,
     city: select1
  },
  payType: null,
  finishPrice: document.querySelector('.end-price')
}
const conteiner = document.querySelector('.conteiner')
const endBtnTrue = document.querySelector('.end-btn-true');

endBtnTrue.addEventListener('click', () => {
  const orderData = {
    name: orderForm.name.value,
    surname: orderForm.surname.value,
    phone: orderForm.phone.value,
    email: orderForm.email.value,
    count: orderForm.count.value,
    delivery: {
      typeDel: orderForm.delivery.typeDel,
      city: orderForm.delivery.city,
    },
    payType: orderForm.payType,
    finishPrice: orderForm.finishPrice.value,
  };
  

  const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];

  existingOrders.push(orderData);

  localStorage.setItem('orders', JSON.stringify(existingOrders));
  
  conteiner.innerHTML = '';
  console.log('Успішно');
  setTimeout(() => {
    const queryParams = encodeURIComponent(JSON.stringify(orderData));
    window.location.href = `http://127.0.0.1:5501/listOrder/list.html`;
  }, 100);
});



















checkbox1.addEventListener('change', (e) => {
  if (e.target.checked) {
    checkbox2.checked = false;
    orderForm.delivery.typeDel = 'Самовивіз з Укрпошти'; 
    orderForm.delivery.city = '';
  } else {
    orderForm.delivery.typeDel = null
  
  }
})

checkbox2.addEventListener('change', (e) => {
  if (e.target.checked) {
    checkbox1.checked = false;
    orderForm.delivery.typeDel = 'Самовивіз з Новапошта'; 
    orderForm.delivery.city = '';
  } else {
    orderForm.delivery.typeDel = null;
  }
})






