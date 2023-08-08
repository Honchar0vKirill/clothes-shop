const form = { 
    name: document.querySelector('input[form-name]'),
    email: document.querySelector('input[form-email]'),
    reviews: document.querySelector('input[form-reviews]'),
    btnClean: document.querySelector('button[form-btn]'),
    btnSubmit: document.querySelector('.btnConfirm')
}
const formBlock = document.querySelector('.form')
const title = document.querySelector('.Title')
const btns = document.querySelector('.btns')
const productId = window.location.hash.substring(1)
const baseUrl = 'http://localhost:4000/reviews'


let dataForm 


if (localStorage.getItem('form')){
    dataForm = JSON.parse(localStorage.getItem('form'))
    if (dataForm.name) { 
        form.name.value = dataForm.name
    }
} else { 
    dataForm = {}
}

form.name.addEventListener('input', () => {
   dataForm = { 
    ...dataForm,
    name: form.name.value
   }
   localStorage.setItem('form', JSON.stringify(dataForm))
})

form.btnClean.addEventListener('click', () => {
    localStorage.removeItem('form')
    location.reload()
})


console.log(window.location)
const btnBack = document.querySelector('.btnBack')
btnBack.addEventListener('click', () => {
    window.location.href = `http://127.0.0.1:5501/product-characteristic/index.html#${productId}`
    console.log('click')
})


form.btnSubmit.addEventListener('click', () => {
    const dataForm = {
        name: form.name.value,
        email: form.email.value,
        text: form.reviews.value,
        idProduct: productId
    }
    axios.post(`${baseUrl}/create`, dataForm)
        .then((res) => {
            formBlock.innerHTML = ""
            btns.innerHTML = ""
            title.innerHTML = "Дякуюємо за відгук!"
            setTimeout(() => {
                window.location.href = `http://127.0.0.1:5501/product-characteristic/index.html#${productId}`
            }, 2000);

        })
})