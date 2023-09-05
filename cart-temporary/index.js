const productsEl = document.querySelector('#productsList');
const wishListStore = JSON.parse(localStorage.getItem('wishList')) || [];


const removeFromWishList = (productId) => {
   const productIndex = wishListStore.findIndex(productItem => productItem.id === productId);
    
    if (productIndex !== -1) {
        wishListStore.splice(productIndex, 1);
        localStorage.setItem('wishList', JSON.stringify(wishListStore));
        renderProducts();
    }
};

const renderProducts = () => {
    productsEl.innerHTML = '';

    wishListStore.forEach(productItem => {
        productsEl.innerHTML += `
            <div class="productItem">
                <img src="${productItem.img}">
                <p>${productItem.name}</p>        
                <p>${productItem.price} грн</p>
                <button class="btnOrders">Замовити</button>
                <button
                    productId="${productItem.id}"
                    class="btnRemoveFromWishList"
                >Видалити зі списку бажань</button>
            </div>
        `

    });
    const orderProduct = document.querySelectorAll('.btnOrders');
    
    const removeButtons = document.querySelectorAll('.btnRemoveFromWishList');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('productId');
            removeFromWishList(productId);
        });
    });
};

renderProducts();


orderProduct.addEventListener('click', () => {
    const productToOrder = {
        id: productInfo.id,
        img: productInfo.imgUrl,
        name: productInfo.name,
        price: productInfo.price
    };

    let orderDataInfo = JSON.parse(localStorage.getItem('wishList')) || [];
    orderDataInfo.push(productToOrder);
    localStorage.setItem('wishList', JSON.stringify(orderDataInfo));

    
});