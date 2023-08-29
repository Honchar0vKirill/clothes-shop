const productsEl = document.querySelector('#productsList');
const wishListStore = JSON.parse(localStorage.getItem('wishList')) || [];

const renderProducts = () => {
    productsEl.innerHTML = '';

    wishListStore.forEach(productItem => {
       
            productsEl.innerHTML += `
            <div class="productItem">
                <p>${productItem.name}</p>        
                <p>${productItem.price} грн</p>
                <button
                    productId="${productItem.id}"
                    class="btnRemoveFromWishList"
                >Видалити зі списку бажань</button>
            </div>
            `
    });

    const removeButtons = document.querySelectorAll('.btnRemoveFromWishList');
    removeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const productIdToRemove = btn.getAttribute('productId');
            const updatedWishList = wishListStore.filter(id => id !== productIdToRemove);
            localStorage.setItem('wishList', JSON.stringify(updatedWishList));
            renderProducts();
        });
    });
};

renderProducts();

