// Script for responsive navigation menu
function toggleMenu() {
	var menu = document.getElementById("menu");
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}
// Responsive Navigation Bar
function toggleMenu() {
	var navbar = document.querySelector('.navbar');
	if (navbar.classList.contains('responsive')) {
		navbar.classList.remove('responsive');
	} else {
		navbar.classList.add('responsive');
	}
}
/* Navigation bar functionality */

function toggleMenu() {
    var nav = document.querySelector('nav');
    var button = document.querySelector('nav button');
    if (nav.className === '') {
        nav.className = 'mobile';
        button.innerHTML = 'Close';
    } else {
        nav.className = '';
        button.innerHTML = 'Menu';
    }
}

var cart = [];

function addToCart() {
  var item = {
    name: "اسم المنتج",
    price: 10.99,
    quantity: 1
  };
  cart.push(item);
  updateCart();
}

function updateCart() {

  var cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var itemElement = document.createElement("div");
    itemElement.innerHTML = item.name + " - " + item.price + " - " + item.quantity;
    cartElement.appendChild(itemElement);
  }
}
