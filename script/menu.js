const showCloseMenu = function () {
    const menuIcon = document.querySelector('.menu__toggle');
    const menu = document.querySelector('.menu__list');
    const menuClose = document.querySelector('.menu__close');

    const showMenu = () =>{
        menu.classList.add("menu__phone")
        menuClose.hidden = false;
        menuIcon.style.display = "none";
    }
    const closeMenu = () =>{
        menu.classList.remove("menu__phone")
        menuClose.hidden = true;
        menuIcon.style.display = "block";
    }
 
    menuIcon.addEventListener('click', showMenu);
    menuClose.addEventListener('click', closeMenu);
}();