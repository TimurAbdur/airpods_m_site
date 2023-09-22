const chooseColor = document.querySelectorAll('.choose-color__btn');
const contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function(el) {
    el.addEventListener('click', open);
});

function open(evt) {
    chooseColor.forEach(function(item) {
        item.classList.remove('choose-color__btn--active');
    });
    contentItem.forEach(function(item) {
        item.classList.remove('content-item--active');
    });

    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    contentActive.forEach(function(item) {
        item.classList.add('content-item--active');
    })

    target.classList.add('choose-color__btn--active');
}