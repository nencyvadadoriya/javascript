document.addEventListener("DOMContentLoaded", function () {
    var productList = document.getElementById("product-items");
    var cartList = document.getElementById("cart-items");
    var productForm = document.getElementById("product-form");

    let products = JSON.parse(localStorage.getItem("products")) || [];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function saveProducts() {
        localStorage.setItem("products", JSON.stringify(products));
    }
    function renderProducts() {
        if (!productList) return;
        productList.innerHTML = "";
        products.forEach((product, index) => {
            var row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.name}</td>
                <td>$${product.price}</td>
                <td>${product.quantity}</td>
                <td><img src="${product.image}" width="50" height="50"></td>
                <td>
                    <button class="add-to-cart" data-index="${index}">Add to Cart</button>
                    <button class="delete-product" data-index="${index}">Delete</button>
                </td>
            `;
            productList.appendChild(row);
        });
        document.querySelectorAll(".delete-product").forEach(button => {
            button.addEventListener("click", function () {
                var index = this.getAttribute("data-index");
                products.splice(index, 1);
                saveProducts();
                renderProducts();
            });
        });
        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", function () {
                var index = this.getAttribute("data-index");
                var selectedProduct = products[index];

                if (!cart.some(item => item.name === selectedProduct.name)) {
                    cart.push(selectedProduct);
                    saveCart();
                    alert("Product added to cart!");
                } else {
                    alert("Product already in cart!");
                }
            });
        });
    }
    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    function renderCart() {
        if (!cartList) return;
        cartList.innerHTML = "";
        cart.forEach((product, index) => {
            var row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>$${product.price}</td>
                <td>${product.quantity}</td>
                <td><img src="${product.image}" width="50" height="50"></td>
                <td>
                    <button class="remove-cart" data-index="${index}">Remove</button>
                </td>
            `;
            cartList.appendChild(row);
        });

        document.querySelectorAll(".remove-cart").forEach(button => {
            button.addEventListener("click", function () {
                var index = this.getAttribute("data-index");
                cart.splice(index, 1);
                saveCart();
                renderCart();
            });
        });
    }
    if (productForm) {
        productForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("productname").value;
            let price = document.getElementById("productprice").value;
            let quantity = document.getElementById("productquantity").value;
            let imageInput = document.getElementById("productImage");
            let image = "";

            if (imageInput.files.length > 0) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    image = e.target.result;
                    let newProduct = { name, price, quantity, image };
                    products.push(newProduct);
                    saveProducts();
                    renderProducts();
                    productForm.reset();
                };
                reader.readAsDataURL(imageInput.files[0]);
            }
        });
    }
    renderProducts();
    renderCart();
});
