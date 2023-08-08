const productImg = document.querySelector('.productSlider')
const productName = document.querySelector('.name')
const productPrice = document.querySelector('.price')
const productId = window.location.hash.substring(1)
const baseUrl = 'http://localhost:4000/products'

let productInfo

const renderProduct = () => {
    productImg.innerHTML = `
    <img class="sliderImg" src="${productInfo.imgUrl}">
    `

    productName.innerHTML = `${productInfo.name}`

    productPrice.innerHTML = `${productInfo.price}`

}

const getProduct = () => {
    axios.get(`${baseUrl}/item?id=${productId}`)
        .then(res => {
            productInfo = res.data
            renderProduct()
        })
}

getProduct()