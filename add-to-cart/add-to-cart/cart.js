window.onload = function () {
    var form = document.getElementById("product-form");
    var cartItem = document.getElementById("cart-items"); 
    let editIndex = localStorage.getItem("editIndex");
    if (editIndex !== null) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let product = cart[editIndex];
        document.getElementById("productname").value = product.name;
        document.getElementById("productprice").value = product.price;
        document.getElementById("productquantity").value = product.quantity;
        document.getElementById("productsize").value = product.size;
        document.getElementById("productcolor").value = product.color;
    }
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            let product = {
                name: document.getElementById("productname").value,
                price: document.getElementById("productprice").value,
                quantity: document.getElementById("productquantity").value,
                size: document.getElementById("productsize").value,
                color: document.getElementById("productcolor").value,
            };
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            if (editIndex !== null) {
                cart[editIndex] = product;
                localStorage.removeItem("editIndex");
                alert("Product updated successfully!");
            } else {
                cart.push(product);
                alert("Product added to cart!");
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            form.reset();
            window.location.href = "add-to-cart.html";
        });
    }
    if (cartItem) {
        function loadCart() {
            cartItem.innerHTML = "";
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            if (cart.length === 0) {
                cartItem.innerHTML = "<p>Your cart is empty.</p>";
                return;
            }
            cart.forEach((item, index) => {
                cartItem.innerHTML += `
                    <div>
                        <p><strong>${item.name}</strong> - $${item.price}, Qty: ${item.quantity}, Size: ${item.size}, Color: ${item.color}</p>
                        <button onclick="editProduct(${index})">Edit</button>
                        <button onclick="removeProduct(${index})">Remove</button>
                        <hr>
                    </div>`;
            });
        }
        loadCart();
    }
    window.editProduct = function (index) {
        localStorage.setItem("editIndex", index);
        window.location.href = "index.html"; 
    };
    window.removeProduct = function (index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product removed!");
        location.reload();  
    };
};
