function randomDates(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getRandomDateArrays(number) {
    let newArray = [];
    for (let i = 0; i <= number; i++) {
        newArray.push(randomDates(new Date(3600 * 24 * 1000), new Date()));
    }
    return newArray;
}

function sortArray(a, b) {
    if (a > b) {
        return 1;
    }
    if (a === b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
}

let newArray = getRandomDateArrays(7);

let serialArray = JSON.stringify(newArray);
localStorage.setItem('myArray', serialArray);

let returnArray = JSON.parse(localStorage.getItem("myArray"));
returnArray.sort(sortArray);

serialArray = JSON.stringify(returnArray);
localStorage.setItem('newArray', serialArray);

console.log(localStorage.getItem('newArray'));