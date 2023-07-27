const body = document.querySelector('.main_content')

let products = []

const renderProducts = () => { 
    body.innerHTML = ""
    products.forEach(productItem => { 
        body.innerHTML += `
        <div class="content-block">
            <img class="content-block_img" src="${productItem.imgUrl}" alt="">
            <p class="content-block_text">${productItem.name}</p>
            <p class="content-block_text sum">${productItem.price}</p>
            <button type="button" element-id="${productItem.id}" class="content-block_button">Add to the cart</button>
        </div>
        `
    })
    const btns = document.querySelectorAll('.content-block_button')
    const blocks = document.querySelectorAll('.content-block')

    blocks.forEach(block => {
        block.addEventListener('click', () => {
            btns.forEach(btnEl => {
                const btnId = btnEl.getAttribute('element-id')
                
                

            })
        })
    })
}

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