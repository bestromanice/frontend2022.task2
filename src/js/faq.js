const buttons = document.querySelectorAll('.dt__btn')   // список всех dt__btn

buttons.forEach((btn) => { 
    btn.addEventListener('click', (e) => {
        const target = e.currentTarget
        const parentDT = target.parentElement
        const DD = parentDT.nextElementSibling
        const faqToggle = target.lastElementChild
        DD.classList.toggle('faq__dd--opened') 
        faqToggle.classList.toggle('faq__svg--down')
    })
});
