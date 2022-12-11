function getCurrentDate() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mar', 'Apr',
                    'June', 'July', 'Aug', 'Sep', 'Oct', 'Dec']
    let now = new Date()
    
    return `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`
}

const form = document.querySelector(".add-article__form")                       //находим add-article__form
const btnAdd = document.querySelector(".add-article__btn-add")                  //находим add-article__btn-add
const btnCancel = document.querySelector(".add-article__btn-cancel")            //находим add-article__btn-cancel
const btnCreate = document.querySelector(".add-article__btn-create")            //находим add-article__btn-create

const articlesContainer = document.querySelector(".main__articles")             //находим main__articles

btnAdd.addEventListener('click', () => {                    //при нажатии на кнопку добавления статьи
    btnAdd.classList.add('add-article__btn-add--disabled')  //добавляем к add-article__btn-add класс add-article__btn-add--disabled
    form.classList.remove('add-article__form--disabled')    //убираем у add-article__form класс add-article__form--disabled

    form.articleLink.value = ""
    form.articleName.value = ""
    form.articleDescription.value = ""
})

btnCancel.addEventListener('click', () => {                     //при нажатии на кнопку отмены
    form.classList.add('add-article__form--disabled')           //добавляем к add-article__form класс add-article__form--disabled
    btnAdd.classList.remove('add-article__btn-add--disabled')   //убираем у add-article__btn-add класс add-article__btn-add--disabled
})

btnCreate.addEventListener('click', () => { //при нажатии на кнопку создания статьи перед закрывающим тегом добавляем часть html для статьи
    articlesContainer.insertAdjacentHTML('beforeend', `
    <article class="articles__article article">
        <img class="article__image" src="${form.articleLink.value}" alt="imageOfArticle">
        <a class="article__link" href="#">
            <h4 class="article__header">${form.articleName.value}</h4>
        </a>
        <p class="article__description">${form.articleDescription.value}</p>
        <div class="article__spacer-box"></div>
        <header class="article__add-info">
            <p><time datetime="">${getCurrentDate()}</time> · 5 min read</p>
        </header>
    </article>`)

    form.classList.add('add-article__form--disabled')           //добавляем к add-article__form класс add-article__form--disabled
    btnAdd.classList.remove('add-article__btn-add--disabled')   //убираем у add-article__btn-add класс add-article__btn-add--disabled
})
