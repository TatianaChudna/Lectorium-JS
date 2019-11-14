let leftButton = document.getElementById('button-left');
let rightButton = document.getElementById('button-right');
let listImage = document.getElementById('carousel').getElementsByTagName('li');

function nextImage() {
    let last = listImage[listImage.length - 1];
    let first = listImage[0];
    first.className = null;
    last.parentNode.insertBefore(last, first);
    last.className = 'active';
}

function prevImage() {
    let first = listImage[0];
    let second = listImage[1];
    first.className = null;
    first.parentNode.appendChild(first);
    second.className = 'active';
}

rightButton.addEventListener('click', prevImage);
leftButton.addEventListener('click', nextImage);