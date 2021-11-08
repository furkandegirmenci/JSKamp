
var nums = [num]
var flag = 1
while(num != 0){
    var num
    num = prompt("Sayi gondermeyi birakmak icin 0 yaziniz", "")
    if(num === null || num === undefined || num == "") {
        console.log("Sayi girmediniz, islemden cikiliyor")
        num = 0
        flag = 0
    }

    let newLength = nums.push(num)
}
if(flag == 1) {
    for(var i = 1; i < nums.length - 1; i++) {
        prime(nums[i])
    }
}
function prime(numbers) {
    for (var i = 2; i < Math.sqrt(numbers); i++) {
        if(numbers % i == 0) {
            console.log(numbers + " Sayisi asal degil.")
            return 0; 
        }
    }
    console.log(numbers + " Sayisi asal.")
}
