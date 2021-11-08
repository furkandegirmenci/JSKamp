let i
let j
for(i = 2; i <= 1000; i++) {
    let flag = 0
    primes(i)
    if(flag == 0) {
        console.log(i + " Sayisi asal.")
    }
}

function primes(num) {
    for (j = 2; j <= Math.sqrt(num); j++) {
        if(num % j == 0) {
            flag = 1
        }
    }
    
}