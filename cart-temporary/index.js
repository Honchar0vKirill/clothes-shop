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
                <button>Замовити</button>
                <button
                    productId="${productItem.id}"
                    class="btnRemoveFromWishList"
                >Видалити зі списку бажань</button>
            </div>
        `
    });

    
    const removeButtons = document.querySelectorAll('.btnRemoveFromWishList');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('productId');
            removeFromWishList(productId);
        });
    });
};

renderProducts();


