var attempt = 0;

function login() {
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (userName === "florida" && password === "1234") {
        window.location.href = "Home.html";
        return true;
    } else {
        attempt++;
        if (attempt >= 2) {
            alert("Cannot log in. Try again later.");
            document.getElementById("btnLogin").disabled = true;
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            return false;
        } else {
            alert("Invalid username or password. Attempt " + attempt + " of 2.");
            return false;
        }
    }
}

function toggle_Cartpopup() {

    document.getElementById("prevCart").classList.toggle("active");
    document.body.classList.toggle("popup-open");
    document.body.classList.toggle("popup-active");
    var backgroundElements = document.querySelectorAll("nav, .HomeContent, .Shop");

    backgroundElements.forEach(function(element) {
        element.classList.toggle("no-pointer-events");
    });

    var homeContentElements = document.querySelectorAll(".HomeContent p, .HomeContent h1, .btnShopNow");
    homeContentElements.forEach(function(element) {
        element.classList.toggle("blur");
    });
}

function toggle_Cartremove() {

    var popup = document.getElementById("prevCart");
    popup.classList.remove("active");
    document.body.classList.remove("popup-active");

    document.body.classList.remove("popup-open");

    var backgroundElements = document.querySelectorAll("nav, .HomeContent, .Shop, .HomeContent p, .HomeContent h1, .btnShopNow");
    backgroundElements.forEach(function(element) {
        element.classList.remove("blur");
        element.classList.remove("no-pointer-events");
    });
}



function toggle_popup() {
    document.getElementById("previewMenu").classList.toggle("active");
    document.body.classList.toggle("popup-open");
    document.body.classList.toggle("popup-active");
    var backgroundElements = document.querySelectorAll("nav, .HomeContent, .btnShopNow");
    backgroundElements.forEach(function(element) {
        element.classList.toggle("no-pointer-events");
    });
}

function toggle_remove() {

    var popup = document.getElementById("previewMenu");
    popup.classList.remove("active");
    document.body.classList.remove("popup-active");
    document.body.classList.remove("popup-open");
    var backgroundElements = document.querySelectorAll("nav, .HomeContent, .btnShopNow");
    backgroundElements.forEach(function(element) {
        element.classList.remove("no-pointer-events");
    });

    document.getElementById("itemQuant").value = 1;
    currentQuant = 1;
}



var car1 = {
    image: "IMG/cars/GT3 911(992).png",
    name: "GT3 911(992) – Ltd..",
    price: "₱15,990",
    description: "Strictly limited collector's model of the Porsche 911 GT3 (992) made of die-cast.",
    color: "Rubystar",
    scale: "1:43"
};

var car2 = {
    image: "IMG/cars/Porsche 99x Electric – Ltd..png",
    name: "Porsche 99x Electric – Ltd..",
    price: "₱59,990",
    description: "Exclusive collector's model of the Porsche 99x Electric made of resin.",
    color: "Black",
    scale: "1:43",
};

var car3 = {
    image: "IMG/cars/Porsche Vision Renndienst – Ltd..png",
    name: "Porsche Vision Renndienst – Ltd.",
    price: "₱34,990",
    description: "High-quality collector's model of the Porsche Vision Renndienst.",
    color: "Red",
    scale: "1:43",
};

var car4 = {
    image: "IMG/cars/Porsche Vision Gran Turismo VEXX – Ltd..png",
    name: "Porsche Vision Gran Turismo VEXX – Ltd.",
    price: "₱45,990",
    description: "High-quality collector's model of the Porsche Vision Gran Turismo VEXX.",
    color: "Multicolor",
    scale: "1:18",

};

var car5 = {
    image: "IMG/cars/Porsche Taycan GTS Hockenheimring Edition – Ltd..png",
    name: "Porsche Taycan GTS Hockenheimring Edition – Ltd.",
    price: "₱24,990",
    description: "High-quality collector's model of the Porsche Taycan GTS Hockenheimring Edition .",
    color: "White",
    scale: "1:43",

};

var car6 = {
    image: "IMG/cars/Porsche Le Mans Living Legend – Ltd..png",
    name: "Porsche Le Mans Living Legend – Ltd.",
    price: "₱15,990",
    description: "High-quality collector's model of the Porsche Le Mans Living Legend.",
    color: "Silver",
    scale: "1:43",

};

var car7 = {
    image: "IMG/cars/Porsche 911 Turbo Coupé (992) – Ltd..png",
    name: "Porsche 911 Turbo Coupé (992) – Ltd.",
    price: "₱155,990",
    description: "High-quality collector's model of the Porsche 911 Turbo Coupé (992).",
    color: "Purpurit Metallic",
    scale: " 1:43",

};

var car8 = {
    image: "IMG/cars/Porsche 963 24h Daytona 2023.png",
    name: "Porsche 963 24h Daytona 2023",
    price: "₱99,990",
    description: "Exclusive collector's model of the Porsche 963 24h Daytona 2023 #6 made of resin.",
    color: "Red",
    scale: " 1:43",

};

var car9 = {
    image: "IMG/cars/Porsche 919 Street – Ltd..png",
    name: "Porsche 919 Street – Ltd.",
    price: "₱45,990",
    description: "High-quality collector's model of the Porsche 919 Street.",
    color: "Silver",
    scale: "1:18",

};

var car10 = {
    image: "IMG/cars/Porsche Taycan Turbo 4S Cross Turismo – Ltd..png",
    name: "Porsche Taycan Turbo 4S Cross Turismo – Ltd.",
    price: "₱569,990",
    description: "High-quality collector's model of the Porsche Taycan Turbo 4S Cross Turismo.",
    color: "Ice Grey Metallic",
    scale: "1:18",

};

var car11 = {
    image: "IMG/cars/Porsche Vision Spyder – Ltd..png",
    name: "Porsche Vision Spyder – Ltd.",
    price: "₱100,990",
    description: "High-quality collector's model of the Porsche Vision Spyder.",
    color: "Silver",
    scale: " 1:43",

};

var car12 = {
    image: "IMG/cars/Porsche 911 GT3 R (992) - Ltd..png",
    name: "Porsche 911 GT3 R (992) - Ltd.",
    price: "₱87,990",
    description: "High-quality, detailed collector's model of the 911 GT3 R (992).",
    color: "White",
    scale: " 1:18",

};

var car13 = {
    image: "IMG/cars/Porsche 911 GT3 mit Touring-Paket (992) – Ltd..png",
    name: "Porsche 911 GT3 mit Touring-Paket (992) – Ltd.",
    price: "₱10,990",
    description: "High-quality collector's model of the Porsche 911 GT3 mit Touring-Paket (992).",
    color: "lava orange",
    scale: "1:18",

};

var car14 = {
    image: "IMG/cars/Porsche 911 GT3 (992) signal yellow – Limited edition.png",
    name: "Porsche 911 GT3 (992) signal yellow – Limited edition",
    price: "₱12,990",
    description: "Exclusive 1:12 scale collector's model of the Porsche 911 GT3 in signal yellow",
    color: "Yellow",
    scale: "1:12",

};

var car15 = {
    image: "IMG/cars/Porsche 911 GT3 (992) & Porsche 956 – Limited edition.png",
    name: "Porsche 911 GT3 (992) & Porsche 956 – Limited edition.",
    price: "₱16,990",
    description: "Strictly limited set of models of the Porsche 911 GT3 (992) and Porsche 956 LM 1985 made of resin.",
    color: "Yellow",
    scale: "1:43",

};

var car16 = {
    image: "IMG/cars/Porsche 911 GT2 RS Clubsport 25 – Ltd.png",
    name: "Porsche 911 GT2 RS Clubsport 25 – Ltd.",
    price: "₱27,990",
    description: "Exclusive collector's model of the Porsche 911 GT2 RS Clubsport 25 made of resin.",
    color: "Grey",
    scale: "1:12",

};

var car17 = {
    image: "IMG/cars/Porsche 911 Dakar (992) Rally 1974 Design – Ltd..png",
    name: "Porsche 911 Dakar (992) Rally 1974 Design – Ltd.",
    price: "₱24,990",
    description: "Porsche 911 Dakar (992) Rally 1974 Design – Ltd.",
    color: "Multicolor",
    scale: "1:18",

};


var car18 = {
    image: "IMG/cars/Porsche 911 Carrera RS 2.7 – Ltd..png",
    name: "Porsche 911 Carrera RS 2.7 – Ltd.",
    price: "₱19,990",
    description: "High-quality collector's model of the Porsche 911 Carrera RS 2.7.",
    color: "Black",
    scale: "1:43",

};

var car19 = {
    image: "IMG/cars/Porsche 718 Cayman GT4 RS (982) – Ltd.png",
    name: "Porsche 718 Cayman GT4 RS (982) – Ltd.",
    price: "₱68,990",
    description: "Exclusive collector's model of the Porsche 718 Cayman GT4 RS (982) made of resin.",
    color: "Arctic Grey",
    scale: " 1:12",

};

var car20 = {
    image: "IMG/cars/Porsche 718 Cayman GT4 RS (982) – Ltd..png",
    name: "Porsche 718 Cayman GT4 RS (982) – Ltd.",
    price: "₱41,990",
    description: "Exclusive collector's model of the Porsche 718 Cayman GT4 RS (982) made of resin.",
    color: "Rubystar",
    scale: " 1:12",

};


var current_product = null;
var shopping_cart = [];

function displayProduct(product) {
    toggle_popup();

    current_product = product;

    document.getElementById("product_img").src = product.image;
    document.getElementById("product_name").innerHTML = product.name;
    document.getElementById("product_price").innerHTML = product.price;
    document.getElementById("product_desc").innerHTML = product.description;
    document.getElementById("product_color").innerHTML = product.color;
    document.getElementById("product_scale").innerHTML = product.scale;


}

var currentQuant = document.getElementById("itemQuant").value;
currentQuant = 1;

function decreaseQuant() {
    var quant = parseInt(currentQuant) - 1;
    if (quant >= 0) {
        document.getElementById("itemQuant").value = quant;
        currentQuant = quant;
    } else {
        document.getElementById("itemQuant").value = 0;
        currentQuant = 0;
    }
}

function increaseQuant() {
    var quant = parseInt(currentQuant) + 1;
    document.getElementById("itemQuant").value = quant;
    currentQuant = quant;
}


function decreaseQuantCart(element) {
    let input = element.nextElementSibling.querySelector('input');
    let currentValue = parseInt(input.value);
    if (currentValue > 1) {
        input.value = currentValue - 1;
    }
}

function increaseQuantCart(element) {
    let input = element.previousElementSibling.querySelector('input');
    let currentValue = parseInt(input.value);
    input.value = currentValue + 1;
}


function updatePrice() {
    var selected_price = document.querySelector('input[name="price"]:checked').value;
    document.getElementById("selected_price").innerHTML = "₱ " + selected_price;
}

function add_to_cart() {
    var quantity = document.getElementById("itemQuant").value;

    if (quantity > 0 && current_product !== null) {
        var cart_item = {
            name: current_product.name,
            quantity: parseInt(quantity),
            price: parseFloat(current_product.price.replace('₱', '').replace(',', '')),
            size: current_product.scale
        };

        shopping_cart.push(cart_item);
        update_cart();

        var confirmDialog = confirm("Successfully added to cart! Do you want to view your shopping cart?");

        if (confirmDialog) {
            toggle_remove();
            toggle_Cartpopup();
        }

        document.getElementById("itemQuant").value = 0; // Reset quantity input
    } else {
        alert("Enter a valid quantity!!");
    }
}

function update_cart() {
    var img_holder = document.getElementById("product_img");
    var item_list = document.getElementById('item_list');
    var total_price = document.getElementById('total_price');
    item_list.innerHTML = '';
    var total = 0;

    for (var p = 0; p < shopping_cart.length; p++) {
        var item = shopping_cart[p];

        var row = document.createElement('tr');


        var name_cell = document.createElement('td');
        var img_element = document.createElement('img');
        img_element.src = img_holder.src; // Assuming img_holder is an image element
        name_cell.appendChild(img_element);
        row.appendChild(name_cell);

        var name_cell = document.createElement('td');
        name_cell.textContent = item.name;
        row.appendChild(name_cell);

        var quantity_cell = document.createElement('td');
        quantity_cell.textContent = item.quantity + 'X';
        row.appendChild(quantity_cell);

        var size_cell = document.createElement('td');
        size_cell.textContent = item.size + ': ';
        row.appendChild(size_cell);

        var price_cell = document.createElement('td');
        price_cell.textContent = '₱' + (item.price * item.quantity).toFixed(2);
        row.appendChild(price_cell);

        var delete_button = document.createElement('td');
        var delete_icon = document.createElement('span');
        delete_icon.className = 'delete_icon fas fa-trash';
        delete_icon.setAttribute('onclick', 'delete_item(' + p + ')');
        delete_button.appendChild(delete_icon);
        row.appendChild(delete_button);

        item_list.appendChild(row);

        total += item.price * item.quantity;
    }

    total_price.textContent = ' ₱ ' + total.toFixed(2);
}

function delete_item(index) {
    shopping_cart.splice(index, 1);
    update_cart();
}




















/*
function DisplayaddToCart() {
    createItemContainer();
}











/*
function createItemContainer() {
    // Clone the template content
    var template = document.getElementById('prevCart');
    var newItem = template.content.cloneNode(true);

    // Append the cloned item container to the itemsContainer
    document.getElementById('cartContent').appendChild(newItem);
}


/*

var currentQuant = document.getElementById("itemQuant").value;
currentQuant = 1;

function decreaseQuant() {
    var quant = parseInt(currentQuant) - 1;
    if (quant >= 0) {
        document.getElementById("itemQuant").value = quant;
        currentQuant = quant;
    } else {
        document.getElementById("itemQuant").value = 0;
        currentQuant = 0;
    }
}

function increaseQuant() {
    var quant = parseInt(currentQuant) + 1;
    document.getElementById("itemQuant").value = quant;
    currentQuant = quant;
}


function decreaseQuantCart(element) {
    let input = element.nextElementSibling.querySelector('input');
    let currentValue = parseInt(input.value);
    if (currentValue > 1) {
        input.value = currentValue - 1;
    }
}

function increaseQuantCart(element) {
    let input = element.previousElementSibling.querySelector('input');
    let currentValue = parseInt(input.value);
    input.value = currentValue + 1;
}


function createProductItem(item) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('itemContentCart');

    itemContainer.innerHTML = `
        <div class="checkboxContainer">
            <input type="checkbox" id="${item.check}" name="" value="">
            <label for="${item.name}" class="checkboxLabel"></label>
        </div>

        <div class="CART-img_holder">
            <img class="cart_img" src="${item.image}">
        </div>

        <div class="itemDetails">
            <h1 onclick="displayProduct(${JSON.stringify(item)})">${item.name}</h1>
            <p>${"1204918409184"}</p>
        </div>

        <div class="CART-contItemsCount">
            <button onclick="decreaseQuantCart(this)">-</button>
            <div class="input_box">
                <input type="text" class="itemQuant" value="1" required>
            </div>
            <button onclick="increaseQuantCart(this)">+</button>
        </div>
        <i class="fas fa-trash deleteIcon" onclick="deleteItem(this)"></i>
    `;

    document.getElementById('productContainer').appendChild(itemContainer);
}

products.forEach(function(product) {
    createProductItem(product);
});


*/