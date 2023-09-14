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
                <button 
                 imgProduct="${productItem.img}"
                 nameProduct="${productItem.name}"
                 priceProduct="${productItem.price}"
                productId="${productItem.id}"
                class="btnAddFromWishList">Замовити</button>
                <button
                    productId="${productItem.id}"
                    class="btnRemoveFromWishList"
                >Видалити зі списку бажань</button>
            </div>
        `

    });

     
let cartItems = [];

                                      
const addWishItemBtns = document.querySelectorAll('.btnAddFromWishList');
addWishItemBtns.forEach(btnItem => {
    btnItem.addEventListener('click', () => {
        const name = btnItem.getAttribute("nameProduct");
        const price = btnItem.getAttribute("priceProduct");
        const img = btnItem.getAttribute("imgProduct");
        const productId = btnItem.getAttribute("productId");

        
        const product = {
            name: name,
            price: price,
            img: img,
            productId: productId
        };

        cartItems.push(product);

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        window.location.href= "http://127.0.0.1:5501/design/design.html"
    });
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


