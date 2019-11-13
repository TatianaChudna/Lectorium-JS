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

// 3. fib - Returns the nth Fibonacci number.

function fib(number, a = 1, b = 0) {
    if (number === 0) {
        return b;
    } else {
        return fib(number - 1, b, a + b);
    }
}
console.log(fib(0));                              // 0
console.log(fib(1));                              // 1
console.log(fib(10));                             // 55
console.log(fib(20));                             // 6765

//4.  isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

function isSorted(array) {
    let sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            sorted = false;
        }
    }
    return sorted;
}
console.log(isSorted([]));                         // true
console.log(isSorted([-Infinity, -5, 0, 3, 9]) );  // true
console.log(isSorted([3, 9, -3, 10]));             // false

//5.  reverse - Reverses the given string (yes, using the built in reverse function is cheating).

function reverse(str) {
    if (str === '') {
        return ('\'\'');
    }
    return str.split('').reverse().join('');
}
console.log(reverse(''));                         // ''
console.log(reverse('abcdef'));                   // 'fedcba'

//6. indexOf - Implement the indexOf function for arrays.

function findIndex(array, callback) {
    let {length} = array;

    for (let i = 0; i < length; i++) {
        let value = array[i];

        if (callback(value, i, array)) {
            return i;
        }
    }

    return -1;
}

function indexOf(array, searchedValue) {
    return findIndex(array, value => value === searchedValue);
}
console.log(indexOf([1, 2, 3], 1) );              // 0
console.log(indexOf([1, 2, 3], 4) );              // -1