let num1 = prompt("Ilk sayinizi giriniz : ", "")
let num2 = prompt("Ikinci sayinizi giriniz : ", "")


function amicableNumbers(nums) {
    var total = 0
    for(let i = 1; i <= nums; i++) {
        if(nums % i == 0){
            total +=i
        }
    }
    return total;
}

if(amicableNumbers(num1) == amicableNumbers(num2)) {
    console.log(num1 + " ve " + num2 + " Arkadas sayilardir")
} else{
    console.log(num1 + " ve " + num2 + " Arkadas sayi degildir")
}