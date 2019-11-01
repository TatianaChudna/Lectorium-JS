/*1.Closure - Create array constructor function which will use closure for working with private data. It should have 2 private methods and 2 private props which we can change only with that private methods.*/

function Flower(name, habitat) {
    let _name = name;
    let _habitat = habitat;

    return {
        getName() {
            return _name;
        },

        getHabitat() {
            return _habitat;
        },

        setName(newName) {
            _name = newName;
        },

        setHabitat(newHabitat) {
            _habitat = newHabitat;
        },
    };

}

let flower = new Flower('Chamomile', 'field');
console.log(flower.getName());
console.log(flower.getHabitat());
console.log(flower._name);
flower.setName('Rose');
console.log(flower.getName());

/*3.Создать новые методы для всех массивов:
1) myForEach - тот же самый forEach
2) myMap - тот же самый map
3) mySort - тот же самый sort*/

let myForEach = function (myArray, callback, thisArg) {
    for (let i = 0; i < myArray.length; i++) {
        callback.call(thisArg, myArray[i], i, myArray);
    }
};

function multiplyNumbers(myArray) {
    myForEach(myArray, function (number) {
        console.log(number * 2);
    }, this);
}

multiplyNumbers([4, 2, 5, 3, 1]);

let myMap = function (myArray, callback, thisArg) {
    let results = [];
    for (let i = 0; i < myArray.length; i++) {
        results.push(callback.call(thisArg, myArray[i], i, myArray));
    }
    return results;
};

function divideNumbers(myArray) {
    myMap(myArray, function (number) {
        console.log(number / 2);
    });
}

divideNumbers([4, 2, 5, 3, 1]);

function mySort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let number = arr[i];
                arr [i] = arr [j];
                arr [j] = number;
            }
        }
    }
    console.log(arr);
}

mySort([4, 2, 5, 3, 1]);

/*On array 2 dimensional grid with R rows and C columns, we start at (r0, c0) facing east.
Here, the north-west corner of the grid is at the first row and column, and the south-east corner of the grid is at the last row and column.
Now, we walk in array clockwise spiral shape to visit every position in this grid.
Whenever we would move outside the boundary of the grid, we continue our walk outside the grid (but may return to the grid boundary later.)
Eventually, we reach all R * C spaces of the grid.
Return array list of coordinates representing the positions of the grid in the order they were visited.

Example 1:
Input: R = 1, C = 4, r0 = 0, c0 = 0
Output: [[0,0],[0,1],[0,2],[0,3]]

Example 2:
Input: R = 5, C = 6, r0 = 1, c0 = 4
Output: [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]

Note:
1 <= R <= 100
1 <= C <= 100
0 <= r0 < R
0 <= c0 < C
*/

let operation = 1;
let currentOperation = 0;
let countOperations = 2;
let result = [];

function findCoordinates(x, y, rows, cols) {
    while (x <= 100 || y <= 100) {
        if (y >= 0 && y < rows && x >= 0 && x < cols) {
            result.push([y, x]);
        }

        if (countOperations / 2 > currentOperation) {
            x += operation;
        } else {
            y += operation;
        }

        currentOperation += 1;

        if (currentOperation === countOperations) {
            countOperations += 2;
            currentOperation = 0;
            operation *= -1;
        }
    }
}

findCoordinates(4, 1, 5, 6);
findCoordinates(0, 0, 1, 4);
console.log(result);

