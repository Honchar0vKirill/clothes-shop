// Header //

// Take elements from HTML //
const burgerMenu = document.querySelector('.burger-menu')
const menuBlock = document.querySelector('.opened-block')

// Check is menu visible //
let isMenuVisible = false

// Do animation for burger menu //
const burgerMenuAnimation = () => {
    if(!isMenuVisible) {
        burgerMenu.classList.remove('burger-menu_animationTurnOf')
        burgerMenu.classList.add('burger-menu_animationTurnOn')
        menuVisibility()
        isMenuVisible = true
    } else {
        burgerMenu.classList.remove('burger-menu_animationTurnOn')
        burgerMenu.classList.add('burger-menu_animationTurnOf')
        menuVisibility()
        isMenuVisible = false
    }


}

// Do menu visibility onclick burger menu //
const menuVisibility = () => {
    if(!isMenuVisible) {
        menuBlock.classList.replace('displayNone', 'displayBlock')
        isMenuVisible = true
    } else {
        menuBlock.classList.replace('displayBlock', 'displayNone')
        isMenuVisible = false
    }
}

burgerMenu.addEventListener('click', burgerMenuAnimation)