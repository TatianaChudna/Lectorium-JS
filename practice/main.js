function changeText(element) {
    let block = document.getElementById(element.dataset.block);
    let elements = document.querySelectorAll('.block');
    elements.forEach((elem) => {
        elem.style.display = 'none';
    });
    block.style.display = 'block';
    block.style.opacity = 0.1;
    let timer = setInterval(function () {
        block.style.opacity = parseFloat(block.style.opacity) + 0.1;
        if (parseFloat(block.style.opacity) === 1) {
            clearInterval(timer);
        }
    }, 300);
}