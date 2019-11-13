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

//2. factorial - Returns a number that is the factorial of the given number.
function factorial(num) {
    for (let i = num; --i;) {
        num *= i;
        if (num === 0) {
            return 1;
        } else if (num < 0) {
            return undefined;
        }
    }
    return num;
}
console.log(factorial(0));                        // 1
console.log(factorial(1));                        // 1
console.log(factorial(6));                        // 720