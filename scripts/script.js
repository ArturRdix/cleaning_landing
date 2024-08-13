const navMenu = document.getElementById('navMenu');
const burgerMenu = document.getElementById('burgerMenu');
const navLinks = navMenu.querySelectorAll('a');
const logo = document.querySelector('.header__nav__logo'); // Выбор элемента header__nav__logo
const logoSpans = logo.querySelectorAll('span'); // Выбор всех span внутри header__nav__logo

// Функция для обновления цвета span в зависимости от класса active у burgerMenu
function updateSpanColor() {
    if (burgerMenu.classList.contains('active')) {
        logoSpans.forEach(span => span.style.color = '#04b3e2');
    } else {
        logoSpans.forEach(span => span.style.color = ''); // Сброс цвета, если класс отсутствует
    }
}

// Добавляем обработчик клика на burgerMenu
burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    updateSpanColor(); // Обновляем цвет span при каждом клике
});

// Добавляем обработчик клика на ссылки в navMenu
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        updateSpanColor(); // Обновляем цвет span при клике на ссылку
    });
});

// Обновляем цвет span при загрузке страницы, если burgerMenu уже имеет класс active
updateSpanColor();
