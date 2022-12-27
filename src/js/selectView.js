const selectView = document.querySelector('.articles__select-view')     // объект контейнера иконок (он будет обрабатывать их обоих)
const articles = document.querySelector('.main__articles')              // контейнер со статьями

const listView = document.querySelector('.btn-list')                    // кнопка list
const gridView = document.querySelector('.btn-grid')                    // кнопка grid

selectView.addEventListener('click', (event) => {
    if (event.target.closest('.btn-list'))                              // если нажали внутри кнопки list
    {
        gridView.classList.remove('select-view--selected')              // смена цветов
        listView.classList.add('select-view--selected')

        articles.classList.remove('articles')                           // смена вида
        articles.classList.add('articles--is-list')
    }
    if (event.target.closest('.btn-grid'))                              // если нажали внутри кнопки grid
    {
        listView.classList.remove('select-view--selected')              // смена цветов
        gridView.classList.add('select-view--selected')

        articles.classList.remove('articles--is-list')                  // смена вида
        articles.classList.add('articles')
    }
})
