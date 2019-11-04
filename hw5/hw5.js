/*
Asynchronous - debounce - search
У вас есть <input/> в который вы что-то вводите, беспорядочно быстро вводите. Нужно с помощью декоратора debounce сделать так, чтобы он искал елемент в списке(массиве) не на каждый ввод, а раз в 1 секунду, например.
Todo-list (with material design):
1) only clear JS, no libs / frameworks, etc; (имеется ввиду без React/Angular/Vue.js)
2) SASS/SCSS for styles;
3) any design you want;
4) features:
    - add todo (on press "enter" and/or special button for this)
    - remove todo
    - select todo (done)
    - unselect todo (undone)
    - amount of selected todos

Условие: можно использовать либы для material design, но если вы решите таки сделать material design своими руками, то хотя бы сделать npm init.
К примеру, https://github.com/material-components/material-components-web
 */

/*
//Написать функцию debounce, которая возвращает функцию обертку, передающую оригинальной функции только последний вызов функции обертки за переданный интервал
function debounce(log, delay) {
    let timer;

    return function () {
        let args = arguments;

        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            log.apply(this, args);
        }, delay);
    };
}

function log(arguments) {
    console.log(arguments);
}

let debouncedFirst = debounce(log, 500);
let debouncedSecond = debounce(log, 500);
let debouncedThird = debounce(log, 500);

debouncedFirst('1');
debouncedFirst('2');
// --- 500 ms ---
// '2'
debouncedSecond('3');
// --- 500 ms ---
// '3'
debouncedThird('4');
debouncedThird('5');
debouncedThird('6');
// --- 500 ms ---
// '6'
 */