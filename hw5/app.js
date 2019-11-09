let input = document.getElementById('text');
let ul = document.getElementById('todos');
let save = document.getElementById('save');
let remove = document.getElementById('remove');
let select = document.getElementById('select');
let unSelect = document.getElementById('unselect');
let amountSelected = document.getElementById('amount');

function debounce(f, ms) {

    let isCooldown = false;

    return function() {
        if (isCooldown) return;

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
    };
}

function listFilter() {
    let list = document.querySelectorAll('#todos li');
    let note = input.value;
    let regex = new RegExp(note, "gi");

    list.forEach(function (element) {
        let text = element.querySelector('span').innerText.toLowerCase();

        if (text.match(regex)) {
            element.classList.remove('hiden');
        } else  {
            element.classList.add('hiden');
        }
    });
}

function displayAllItems() {
    let list = document.querySelectorAll('#todos li');
    list.forEach(function (element) {
        element.classList.remove('hiden')
    })
}

function createTodo() {
    let li = document.createElement('li');
    let label = document.createElement('label');
    let checkbox = document.createElement('input');
    let span = document.createElement('span');
    let newNote = input.value;

    checkbox.type = 'checkbox';
    label.classList.add('todo-text');
    span.innerText = newNote;
    label.prepend(checkbox);
    label.append(span);
    li.append(label);
    ul.append(li);
    displayAllItems();
    input.value = '';
}

function getCheckedCheckboxes() {
    return document.querySelectorAll('input[type=checkbox]:checked');
}

let debounceFiltering = debounce(listFilter, 500);
input.addEventListener('keyup', (keyPressed) => {
    let keyEnter = 13;

    if (keyPressed.which === keyEnter && input.value !== '') {
        createTodo();
    } else {
        debounceFiltering();
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
        element.parentElement.parentElement.remove();
    });
});

select.addEventListener('click', () => {
    let checked = getCheckedCheckboxes();

    checked.forEach(function (element) {
        element.parentElement.style.color = '#159966';
        element.checked = false;
    });
});

unSelect.addEventListener('click', () => {
    let checked = getCheckedCheckboxes();

    checked.forEach(function (element) {
        element.parentElement.style.color = '#000';
        element.checked = false;
    });
});

amountSelected.addEventListener('click', () => {
    let checked = getCheckedCheckboxes();

    alert(checked.length);
    checked.forEach(function (element) {
        element.checked = false;
    });
});
