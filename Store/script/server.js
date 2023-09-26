const body = document.querySelector('.main_content')
const btnsList = document.querySelectorAll('.products-nav_ul_element')

let products = []
const baseUrl = 'http://localhost:4000/products'

const renderProducts = () => { 
    body.innerHTML = ""
    products.forEach(productItem => { 
        body.innerHTML += `
        <div element-id="${productItem.id}" class="content-block">
            <img class="content-block_img" src="${productItem.imgUrl}" alt="">
            <p class="content-block_text">${productItem.name}</p>
            <p class="content-block_text sum">${productItem.price}</p>
            <button type="button" element-id="${productItem.id}" class="content-block_button">Add to the cart</button>
            <img class="wishLishImg" src="./img/wish.png">
        </div>
        `
    })
    const btns = document.querySelectorAll('.content-block_button')
    const blocks = document.querySelectorAll('.content-block')

    blocks.forEach(blockItem => {
        blockItem.addEventListener('click', () => {
            const productId = blockItem.getAttribute('element-id')
            window.location.href = `http://127.0.0.1:5501/product-characteristic/index.html#${productId}`
        })
    })
}

const getbody = (productsCategory) => {
    axios.get(`${baseUrl}/list-by-category?category=${productsCategory}`)
    .then(res => {
        products = [...res.data]
        renderProducts()
    })
}

const getAllList = () => {
    axios.get(`${baseUrl}/list`)
    .then(res => {
        products = [...res.data]
        renderProducts()
    })
}

btnsList.forEach((btnItem) => {
    btnItem.addEventListener('click', () => {
        if (btnItem.innerText === "All") {
            getAllList
        } else {
            getbody(btnItem.innerText)
        }
    })
})

const getProducts = () => {
    axios.get("http://localhost:4000/products/list")
        .then((res) => {
            products = [
                ...res.data
            ]
            renderProducts()
        })
}

getProducts()