let products = [
    {name: "Pepsi", price: 30, stock: 10},
    {name: "Coke", price: 35, stock: 100},
    {name: "Maggie", price: 10, stock: 150},
    {name: "Nescafe", price: 20, stock: 100},
    {name: "Dairy Milk Silk", price: 150, stock: 100},
    {name: "Lays", price: 30, stock: 10}
]
function showProducts(){
    let arr = products.map(function(element){
        let str = '<tr>';
        str+= '<td class=\'td\'>'+element.name+ '</td>';
        str+= '<td class=\'td\'>'+element.price+ '</td>';
        str+= '<td class=\'td\'>'+element.stock+ '</td>';
        str += '<td><button class="remBtn" onclick="addToCart(\''+element.name+'\')">Add to Cart</button></td>';
        str+='</tr>';
        return str;
    });
    let header = '<tr>'
        header+='<th class=\'th\'>Product</th>'
        header+='<th class=\'th\'>Price</th>'
        header+='<th class=\'th\'>Stock</th>'
        header+= '<th class=\'th\'></th>'
        header+='</tr>'
    let html = '<table class=\'table\'>'+header+arr.join('')+'</table>';
    console.log(html)
    let element = document.getElementById("data");
    element.innerHTML = html;
}

//creating the cart element
let cart = [];
function addToCart(name) {
let product = products.find(p => p.name === name);

let itemInCart = cart.find(item => item.name === name);

if (itemInCart) {
itemInCart.quantity++;
} else {
cart.push({name: product.name, price: product.price, quantity: 1});
}
showCart();
}

// to show cart
function showCart() {
let arr = cart.map(function(element){
let str = '<tr>';
str+= '<td class=\'td\'>'+element.name+ '</td>';
str+= '<td class=\'td\'>'+element.price+ '</td>';
str+= '<td class=\'td\'>'+element.quantity+ '</td>';
str+='</tr>';
return str;
});
let header = '<tr>'
header+='<th class=\'th\'>Product</th>'
header+='<th class=\'th\'>Price</th>'
header+='<th class=\'th\'>Quantity</th>'
header+='</tr>'
let html = '<table class=\'table\'>'+header+arr.join('')+'</table>';
let element = document.getElementById("cart");
element.innerHTML = html;
}