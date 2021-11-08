/*
function addToCard(quantity, productName = "default") {
    console.log("Sepete Eklendi : " + productName
    + " Adet : " + quantity)

    
}

addToCard()
addToCard(3, "Muz")
addToCard(5)

let addToCart = ()=>{
    console.log("Misir")
}

addToCart()

let deneme = function() {
    console.log("A")
}

deneme() //yazılmazsa console kısmında görünmüyor

function addToCart9(productName, quantity, unitPrice) {
    
}
addToCart9("A", 2, 5)

function addCart(product) {
    console.log("Ürün adı : " + product.productName +
    "\nSayı : " + product.quantity + 
    "\nFiyatı : " + product.unitPrice)
}
let product1 = {productName : "B", unitPrice : 4, quantity : 2}
addCart(product1)

let product2 = {productName : "B", unitPrice : 5, quantity : 2}
let product3 = {productName : "B", unitPrice : 5, quantity : 2}
let product4 = {productName : "B", unitPrice : 5, quantity : 2}
product2 = product3
product2.productName = "Karpuz"
console.log(product3)

// sayılar değer tiptir. Objeler referans tiptir.


function addCart2(x) {
    console.log(products)
}

let products = [
    {productName : "A", unitPrice : 5, quantity : 2},
    {productName : "B", unitPrice : 5, quantity : 2},
    {productName : "C", unitPrice : 5, quantity : 2},
    {productName : "D", unitPrice : 5, quantity : 2}
]

addCart2(products)

function add(...numbers) {  //rest
    let total = 0
    for(let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
        total += numbers[i]
    }
    console.log(total)
} //rest operatörü kullanırsan en sona koy. (örn, ...numbers) gibi yap.

add(1,2,3,4,5,6)

let numbers = [1,7,2,9,-5]
console.log(...numbers)
console.log(Math.max(...numbers))


let [a, b, c, [e]] = [
    {name:"A", pop:"aa"},
    "B" ,
    "C",
    [
        ["a","haha"]
    ]
]

console.log(a.pop)
console.log(...[a,b,c,e])
console.log(e)
*/
/*
let pName, uPrice, qantity
({productName:pName, unitPrice:uPrice, quantity:qantity}
 = {productName : "B", unitPrice : 5, quantity : 2})
console.log(pName)

*/