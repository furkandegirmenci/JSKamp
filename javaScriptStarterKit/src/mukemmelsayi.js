
// formül ile yapılmış algoritma
for(let i = 0; i < 6; i++) {
    if(i == 2 || i == 3) {
        console.log((Math.pow(2,i - 1) * (Math.pow(2,i) - 1)) + " Bir mukemmel sayidir")
        continue;
    }
    for(let j = 2; j <= Math.sqrt(i); j++) {
        if(i % j != 0) {
            console.log((Math.pow(2,i - 1) * (Math.pow(2,i) - 1)) + " Bir mukemmel sayidir")
        }
    }
}




/* Gereksiz işlemli
let i
let j
let total = 0
for(i = 0; i <= 1000; i++) {
    total = 0
    for(j = 0; j <= i / 2; j++) {
        if(i % j == 0) {
            total += j
        }

    }
    if(i == total) {
        console.log(i + " Sayisi mukemmel sayidir.")
    }
}
*/