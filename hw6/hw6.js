// 1. isPrime - Returns true or false, indicating whether the given number is prime.

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}
console.log(isPrime(0));                        // false
console.log(isPrime(1));                        // false
console.log(isPrime(17));                       // true
console.log(isPrime(10000000000000));           // false