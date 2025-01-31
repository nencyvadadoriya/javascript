let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
function addToCart(name, price, image) {
    var item = cartItems.some(item => item.name === name);
    if (!item) {
        cartItems.push({ name, price, image });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert(`${name} has been added to your cart.`);
    }
    else{
        alert(`${name}is alredy exits`)
    }
}
function deleteItem(productId) {
    var product = document.getElementById(productId);
    if (product) {
        product.remove();
    }
}
