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
        menuBlock.style.display = 'flex'
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

// Navbar animation //

// Take elements from HTML //
const ulElements = document.querySelectorAll('.products-nav_ul_element')
let activeUlElement = document.querySelector('.products-nav_ul_active-element')
const ulUnderline = document.querySelector('.products-nav_main-hr_underline')

// Show name of current article //

// Take elements from HTML //
const showArticle = document.querySelector('.show-article')

// Change name of article to active button //
const printNameOfArticle = () => {

    // Work with information about active button //
    let contentOfActiveElement = activeUlElement.innerText

    showArticle.innerHTML = `${contentOfActiveElement}`
}

printNameOfArticle()

// Take X position of underline //
const underlineXPosition = () => {
    let underlinePosX = ulUnderline.offsetLeft
    return underlinePosX
}

// Change active button
const changeActiveButton = (newButton) => {
    activeUlElement.classList.remove('products-nav_ul_active-element')
    activeUlElement = newButton
    activeUlElement.classList.add('products-nav_ul_active-element')
}

/* Change X position of underline to X
 position of new active element
*/
const changeUnderlinePosition = () => {
    ulElements.forEach((ulElement, index) => {
ulElement.addEventListener('click', (index) => {
    underlineXPosition()
    let posX = ulElement.offsetLeft
    let underlineWidth = ulUnderline.offsetWidth
    underlinePosX = posX
  
    if (index === 0 || index === ulElements.length - 1) {
      ulUnderline.style.transform = `translateX(${posX}px)`
    } else {
      ulUnderline.style.transform = `translateX(${posX - underlineWidth * 1.5}px)`
    }
  
    changeActiveButton(ulElement)
    printNameOfArticle()
  })
})
}
  

ulUnderline.style.transition = 'transform 0.3s ease'

changeUnderlinePosition() 