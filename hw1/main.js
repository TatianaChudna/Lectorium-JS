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
    let maxNumber = Number.NEGATIVE_INFINITY;
    for (let number of myArray) {

        if (Number.isFinite(number) && number > maxNumber) {
            maxNumber = number;
        }
    }
    console.log(`Max number is ${maxNumber}`);
}

maxFromArray([1, -5, NaN, 9, -1, 'h', 0, undefined, '50', 7, -12, 46]);
maxFromArray([3, 0, -5, 1, '44', -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1]);
maxFromArray([undefined, -1, -8, -2]);
maxFromArray([1, 7, 3]);
maxFromArray([NaN, 1, undefined, 3, 5, -3]);
maxFromArray([1, NaN, 3, 5, -3]);

function minFromArray(myArray) {
    let minNumber = Number.POSITIVE_INFINITY;
    for (let number of myArray) {

        if (Number.isFinite(number) && number < minNumber) {
            minNumber = number;
        }
    }
    console.log(`Min number is ${minNumber}`);
}

minFromArray([1, -5, NaN, 9, -1, 'h', 0, undefined, '50', 7, -12, 46]);
minFromArray([NaN, 3, 0, -9, 1, 44, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1]);
minFromArray([undefined, -1, -8, -2, -13]);
minFromArray([1, 7, 3]);
minFromArray([1, undefined, 3, 5, -3]);
minFromArray([NaN, 1, NaN, 3, 5, -3]);