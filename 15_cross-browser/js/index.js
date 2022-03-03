//swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    a11y: {
        paginationBulletMessage: 'Перейти на слайд {{index}}'
    },
});

//tabs

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.tabs-nav__btn').forEach(function(btn) {
            btn.classList.remove('tabs-nav__btn--active')
        });
        e.currentTarget.classList.add('tabs-nav__btn--active');
        document.querySelectorAll('.tabs-item').forEach(function(tabsBtn) {
            tabsBtn.classList.remove('tabs-item--active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});

//accordion

$(".accordion").accordion({
    heightStyle: "content",
    active: false,
    collapsible: true
});

//burger

document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('menu--active')
})

document.querySelector('#close-btn').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('menu--active')
})

//search

document.querySelector('#search-btn').addEventListener('click', function() {
    document.querySelector('#search-menu').classList.toggle('search-menu--active')
})

document.querySelector('#search-menu__close-btn').addEventListener('click', function() {
    document.querySelector('#search-menu').classList.toggle('search-menu--active')
})