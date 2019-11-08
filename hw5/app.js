import {MDCRipple} from '@material/ripple/index';
// const ripple = new MDCRipple(document.querySelector('.foo-button'));

    let input = document.getElementById('text');
    let ul = document.getElementById('todos');
    let save = document.getElementById('save');
    let remove = document.getElementById('remove');
    let select = document.getElementById('select');
    let unSelect = document.getElementById('unselect');
    let amountSelected = document.getElementById('amount');


    function createTodo() {
        let li = document.createElement('li');
        let label = document.createElement('label');
        let checkbox = document.createElement('input');
        let newNote = input.value;

        checkbox.type = "checkbox";
        label.classList.add('todo-text');
        label.innerText = newNote;
        label.prepend(checkbox);
        li.append(label);
        ul.append(li);

        input.value = '';
    }

    function getCheckedCheckboxes(){
        return document.querySelectorAll('input[type=checkbox]:checked');
    }

    input.addEventListener('keypress', (keyPressed) => {
        let keyEnter = 13;

        if (keyPressed.which === keyEnter && input.value !== '') {
            createTodo();
        }
    });

    save.addEventListener('click', () => {
        if (input.value !== '') {
            createTodo();
        }
    });

    remove.addEventListener('click', () => {
        let checked = getCheckedCheckboxes();

        checked.forEach(function (element) {
            element.parentElement.remove();
        })
    });

    select.addEventListener('click', () => {
        let checked = getCheckedCheckboxes();

        checked.forEach(function (element) {
            element.parentElement.style.color = '#159966';
            element.checked = false;
        })
    });

    unSelect.addEventListener('click', () => {
        let checked = getCheckedCheckboxes();

        checked.forEach(function (element) {
            element.parentElement.style.color = '#000';
            element.checked = false;
        })
    });

    amountSelected.addEventListener('click', () => {
        let checked = getCheckedCheckboxes();

        alert(checked.length);
        checked.forEach(function (element) {
            element.checked = false;
        })
    })
