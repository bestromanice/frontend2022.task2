const buttons = document.querySelectorAll('.dt__btn')   // список всех dt__btn

buttons.forEach((btn) => {                              // для каждой кнопки
    let parentDT = btn.parentElement                    // находим родителя
    let DD = parentDT.nextElementSibling                // затем соседа - искомый dd

    let faqToggle = btn.lastElementChild                // для поворота стрелки
    btn.addEventListener('click', () => {
        DD.classList.toggle('faq__dd--opened')          // добавить класс, если его нет, иначе удалить
        faqToggle.classList.toggle('faq__svg--down')
    })
});
