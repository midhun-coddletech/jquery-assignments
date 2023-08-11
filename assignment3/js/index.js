$(document).ready(function () {
    $('#cart-price').hide();
    $('#checkout-button').hide();
    for (let i = 0; i < productItems.length; i++) {
        let productId = productItems[i].id;
        let productName = productItems[i].productName;
        let productPrice = productItems[i].price;
        let productDescripton = productItems[i].productDescription;
        let imageLink = productItems[i].imageLink;
        $("#product-items-container").append(
            `<div class="item-container">
                <div class="thumbnail-wrapper">
                    <img class="thumbnail" src="img/${imageLink}.jpg" alt="Image of ${productName}">
                </div>
                <h2 class="item-name">${productName}</h2>
                <span class="item-price">Cost ₹${productPrice}</span>
                <p class="item-description">${productDescripton}</p>
                <button id="item${productId}" class="add-cart-button">Add to cart</button>
            </div>`
        );
        $(`#item${productId}`).click(function (){
            let CartItemIndex = cartItems.findIndex(item => item.id === productId);
            if (CartItemIndex !== -1) {
                cartItems[CartItemIndex].quantity += 1;
            } else {
                cartItems.push({
                    id: productId,
                    productName: productName,
                    price: productPrice,
                    imageLink: imageLink,
                    quantity: 1
                });
            }
            updateCart();
        });
    }
    $("#search-box").keyup(function () {
        $("#product-items-container").html("");
        let searchValue = $("#search-box").val().toLowerCase();
        let searchResult = false;

        for (let i = 0; i < productItems.length; i++) {
            let productId = productItems[i].id;
            let productName = productItems[i].productName;
            let productLowerCase = productName.toLowerCase();
            let productPrice = productItems[i].price;
            let productDescripton = productItems[i].productDescription;
            let imageLink = productItems[i].imageLink;
            if (productLowerCase.includes(searchValue)) {
                searchResult = true;
                $("#product-items-container").append(
                    `<div class="item-container">
                        <div class="thumbnail-wrapper">
                            <img class="thumbnail" src="img/${imageLink}.jpg" alt="Image of ${productName}">
                        </div>
                        <h2 class="item-name">${productName}</h2>
                        <span class="item-price">Cost ₹${productPrice}</span>
                        <p class="item-description">${productDescripton}</p>
                        <button id="item${productId}" class="add-cart-button">Add to cart</button>
                    </div>`
                );
            }
        }
        if (!searchResult) {
            $("#product-items-container").append(
                '<p class="no-results">No results found</p>'
            );
        }
    });
    function updateCart() {
        if (cartItems.length < 1) {
            $("#empty-cart").show();
        }
        else {
            $("#empty-cart").hide();
        }
        $("#cart").html("");
        let cartTotal = 0;
        for (let j = 0; j < cartItems.length; j++) {
            let productId = cartItems[j].id;
            let productName = cartItems[j].productName;
            let imageLink = cartItems[j].imageLink;
            let quantity = cartItems[j].quantity;
            let productPrice = cartItems[j].price;
            let productTotal = productPrice*quantity;
            cartTotal += productTotal;
            $("#cart").append(
                `<div class="cart-items-container">
                            <div class="cart-thumbnail-wrapper">
                                <img class="cart-thumbnail" id="cart-thumbnail" src="img/${imageLink}.jpg" alt="Image of ${productName}">
                            </div>
                            <div class="quantity-container">
                                <h2 class="item-name">${productName}</h2>
                                <span class="item-price">Cost ₹${productTotal}</span>
                                <span class="update-buttons-group">
                                    <button id="increment${cartItems[j].id}" class="increment-button">+</button>
                                    <p class="quantity">${quantity}</p>
                                    <button id="decrement${cartItems[j].id}" class="decrement-button">-</button>
                                </span>
                                <button id="remove-item${cartItems[j].id}" class="remove-cart-button">Remove</button>
                            </div>
                        </div>`
            );
            $('#cart-price').show();
            $('#checkout-button').show();
            $(`#increment${productId}`).click(function(){
                let CartItemIndex = cartItems.findIndex(item => item.id === productId);
                if (CartItemIndex !== -1) {
                    cartItems[CartItemIndex].quantity += 1;
                    updateCart();
                }
            });
            $(`#decrement${productId}`).click(function(){
                let CartItemIndex = cartItems.findIndex(item => item.id === productId);
                if (CartItemIndex !== -1) {
                    if(cartItems[CartItemIndex].quantity != 0) {
                        cartItems[CartItemIndex].quantity -= 1;
                    }
                    updateCart();
                }
            });
            $(`#remove-item${productId}`).click(function(){
                let CartItemIndex = cartItems.findIndex(item => item.id === productId);
                if (CartItemIndex !== -1) {
                    cartItems.splice(CartItemIndex,1);
                    updateCart();
                }
            });
        }
        $('#cart-price').text(`Cart Total: ₹${cartTotal}`);
    }
});
