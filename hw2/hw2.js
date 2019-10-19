/*1) Найти в массиве: sum, min and max, заменить min and max, используя методы, изученные на занятии. Создать функцию которая возвращает все тти значения в объекте.*/

function sumMinMaxFromArray(myArray) {

    let newArray = myArray.filter(function(number) {
        return (typeof number === 'number' && !isNaN(number));
    });

    let sum = newArray.reduce(function(sum, number) {
        return sum + number;
    });

    let max = newArray.reduce(function(max, elem) {
        if (max > elem) {
            return max;
        } else {
            return elem;
        }
    });

    let min = newArray.reduce(function(min, elem) {
        if (min < elem) {
            return min;
        } else {
            return elem;
        }
    });

    let object = {
        sumArray: sum,
        maxNumber: max,
        minNumber: min,
    };
    console.log(object);
}

sumMinMaxFromArray([1, -5, 9, NaN, -1, 'h', 0, undefined, '50', 7, 67, -12, -89, 46]);
sumMinMaxFromArray([NaN, 11,  9, NaN, -1, '6', 10, undefined, '89', 7, 17, 46]);


/*2) Дан масив чисел, которые представляют собой показатели высоты скал: [2,1,5,0,3,4,7,2,3,1,0] (для примера дан этот масив, но может быть любой, Ваш алгоритм должен решать все случаи). Посчитать количество воды (количество синих йчеек), набранной в ямы после дождя. Нужно по возможности использовать методы массива, а не обычные цыклы. Например, в даном примере правильный ответ: 10 */

function findWater(arrayRocks) {
    let startHeight = null;
    let endHeight = null;
    let ground = 0;
    let length = 0;
    let water = 0;
    let waterPrediction = 0;
    let lengthPrediction = 0;
    let findStart = true;

    arrayRocks.map(function (element, index) {
        if (findStart) {
            if (index === 0) {
                startHeight = element;
            } else {
                if (element < startHeight) {
                    ground += element;
                    length++;
                    lengthPrediction++;
                    findStart = false;
                } else {
                    startHeight = element;
                }
            }
        } else {
            if (element < startHeight) {
                if (element > arrayRocks[index - 1]) {
                    waterPrediction += (element - arrayRocks[index - 1]) * lengthPrediction;
                } else {
                    lengthPrediction = 0;
                }
                ground += element;
                length++;
                lengthPrediction++;
            } else {
                endHeight = element;

                let height = startHeight < endHeight ? startHeight : endHeight;
                water += height * length - ground;

                startHeight = element;
                findStart = true;
                ground = 0;
                length = 0;
                lengthPrediction = 0;
                waterPrediction = 0;
            }
        }

        if (index === arrayRocks.length - 1 && !findStart) {
            water += waterPrediction;
        }
    });
    console.log(water);
}

findWater([2, 5, 1, 3, 1, 2, 1, 7, 7, 6]); //17
findWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]); //10
findWater([7, 0, 1, 3, 4, 1, 2, 1]); //9
findWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]); //10
findWater([2, 2, 1, 2, 2, 3, 0, 1, 2]); //4
findWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]); //24
findWater([2, 2, 2, 2, 2]); //0

/* 3) Задание состоит в том, чтобы рассчитать сдачу. У вас есть цена какого-либо товара, продукта. Неважно. Вы по сути просто на ввод даете Цену, И на ввод у вас есть Купюра, которую вы получили за этот продукт. Вам нужно рассчитать все возможные варианты сдачи. И у вас должен быть по сути определенный стек купюр, которыми вы располагаете. Например, [1, 2, 5, 10, 20, 50, 100], статический. И уже в зависимости от вашего стека вам нужно просчитать возможные варианты сдачи.*/

function findChange(price, billsArray, bill) {
    let changeMoney = [];
    let restOfChange = bill - price;

    function findChangeMoney(change, bill) {
        if (change >= bill && change !== 0) {
            restOfChange -= bill;
            changeMoney.push(bill);
            findChangeMoney(restOfChange, bill);
        }
    }

    billsArray.sort(function (a, b) {
        return b - a;
    });

    billsArray.map(function (element) {
        findChangeMoney(restOfChange, element);
    });
    console.log(changeMoney);
}

findChange(26, [1, 2, 5, 10, 20, 50, 100], 30);
findChange(10, [1, 10, 20, 50, 100], 20);
findChange(17, [1, 2, 5, 20, 50, 100], 50);
findChange(120, [10, 20, 50, 100], 200);
findChange(16, [1, 20], 20);