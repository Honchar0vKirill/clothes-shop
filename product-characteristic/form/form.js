const form = { 
    name: document.querySelector('input[form-name]'),
    email: document.querySelector('input[form-email]'),
    reviews: document.querySelector('input[form-reviews]'),
    btnClean: document.querySelector('button[form-btn]'),
    btnSubmit: document.querySelector('.btnConfirm')
}

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
    window.location.href = "http://127.0.0.1:5501/product-characteristic/index.html"
    console.log('click')
})

const productId = window.location.hash.substring(1)
const baseUrl = 'http://localhost:4000/reviews'

let reviewsArr = []

const createReview = () => {
    axios.post(`${baseUrl}/create?id=${productId}`)
        .then(res => {
            
        })
}

form.btnSubmit.addEventListener('click', createReview)