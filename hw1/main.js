function sumFromArray(myArray) {
    let sum = 0;

    for (let number of myArray) {
        if (number && typeof number === 'number') {
            sum += number;
        }
    }
    console.log(`Sum of numbers is ${sum}`);
}

sumFromArray([1, -5, NaN, 9, -1, 'h', 0, undefined, '50', 7, -12, 46]);
sumFromArray([3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1]);
sumFromArray([-1, -8, -2]);
sumFromArray([1, 7, 3]);
sumFromArray([1, undefined, 3, 5, -3]);
sumFromArray([1, NaN, 3, 5, -3]);


function maxFromArray(myArray) {
    let max = null;

    for (let number of myArray) {
        if (max === null) {
            max = number;
        } else if (typeof number === 'number'&& number > max) {
            max = number;
        }
    }
    console.log(`Max number is ${max}`);
}

maxFromArray([1, -5, NaN, 9, -1, 'h', 0, undefined, '50', 7, -12, 46]);
maxFromArray([3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1]);
maxFromArray([0, -1, -8, -2]);
maxFromArray([1, 7, 3]);
maxFromArray([1, undefined, 3, 5, -3]);
maxFromArray([1, NaN, 3, 5, -3]);


function minFromArray(myArray) {
    let min = null;

    for (let number of myArray) {
        if (min === null) {
            min = number;
        } else if (typeof number === 'number' && number < min) {
            min = number;
        }
    }
    console.log(`Min number is ${min}`);
}

minFromArray([1, -5, NaN, 9, -1, 'h', 0, undefined, '50', 7, -12, 46]);
minFromArray([3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1]);
minFromArray([-1, -8, -2]);
minFromArray([1, 7, 3]);
minFromArray([1, undefined, 3, 5, -3]);
minFromArray([1, NaN, 3, 5, -3]);