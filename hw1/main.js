function minMaxSumFromArray(myArray) {
    let sum = 0;
    let max = null;
    let min = null;

    for (let number of myArray) {
        if (number) {
            sum += number;
        }

        if (!min) {
            min = number;
        } else if (number < min) {
            min = number;
        }

        if (!max) {
            max = number;
        } else if (number > max) {
            max = number;
        }

    }
    console.log(`Min number is ${min}`);
    console.log(`Max number is ${max}`);
    console.log(`Sum of numbers is ${sum}`);
    console.log("\n");
}

minMaxSumFromArray([1, -5, NaN, 9, -1, 0, undefined, 7, -12, 46]);
minMaxSumFromArray([3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1]);
minMaxSumFromArray([-1, -8, -2]);
minMaxSumFromArray([1, 7, 3]);
minMaxSumFromArray([1, undefined, 3, 5, -3]);
minMaxSumFromArray([1, NaN, 3, 5, -3]);