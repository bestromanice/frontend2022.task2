const sidebar_items = document.querySelector('.sidebar__items')

const books = [
    "Евгений Онегин", 
    "Горе от ума", 
    "Война и мир", 
    "Тихий Дон", 
    "Герой нашего времени",
    "Алые паруса", 
    "Преступление и наказание", 
    "Собачье сердце", 
    "Мастер и Маргарита",
    "Два капитана",
    "Приключения капитана Врунгеля",
    "Робинзон Крузо"
]

updateBooks(books)

function updateBooks(books)
{
    sidebar_items.innerHTML = ''

    
    books.forEach((book) => {
        const li = document.createElement('li')
        li.className = 'sidebar__item'
        li.append(book)
        sidebar_items.append(li)
    })
}


let searchBtn = document.querySelector('.search-form__btn')
searchBtn.addEventListener('click', () => {
    let searchValue = document.querySelector('.search-form__input').value
    let filtredBooks = books.filter((name) => name.toLowerCase().includes(searchValue.toLowerCase())).sort()
    if (searchValue != ''){
        updateBooks(filtredBooks)
    }
})

// сброс поиска
let resetBtn = document.getElementById('resetButton')
resetBtn.addEventListener('click', () => {
    document.querySelector('.search-form__input').value = ''
    updateBooks(books)
})
