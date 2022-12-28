const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelectorAll('.modal__button');
const modalClose = document.querySelector('.modal__close');
const body = document.querySelector('body');


// В цикле перебираем все кнопки, на каждую кнопку вешаем прослушиватель "клик мышки"
buttonModal.forEach((item) => {
    item.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
        body.classList.add('noscroll');
    })
});

modalWindow.addEventListener(('click'), (e) => {
    const isModal = e.target.closest('.modal__inner') // Это клик внутри модального окна

    if (!isModal) { // Если клик не по модальному окну - окно закрывается
        modalWindow.style.display = 'none';
        body.classList.remove('noscroll');
    }
});
modalClose.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    body.classList.remove('noscroll');
});