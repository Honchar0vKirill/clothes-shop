const description = {
    name: document.querySelector('#name_active'),
    text: document.querySelector('#text_active')
}
const prev = document.querySelector('#btnPrev')
const next = document.querySelector('#btnNext')

const imgActive = document.querySelector('#img_active')
const sliderBotton = document.querySelector('#sliderBotton')

let indexActive = 0

const reviews = [
    {
        id: 1,
        name: "Юра",
        text: "Я дуже задоволений роботою магазину і хочеться подякувати за швидку доставку та мої нові зручні кросівки nike gore-tex! Раджу Ваш магазин усім своїм друзям та знайомим, хочеться, щоб кожен знав, де можна знайти справжні фірмові кроси за класну ціну!",
        img: "https://1.bp.blogspot.com/-gf4AsulEkC0/XCdqkd47rLI/AAAAAAAAL2o/4EIdx895jl4R5nA5VDAAWK-aOvnWA4UbgCLcBGAs/s1600/0%2B%252817%2529.jpg"
    },
    {
        id: 2,
        name: "Олег ",
        text: "Купив Найк Air Force Black, чудові кроси за доступною ціною! Дуже зручні, ногам комфортно, вентиляція та амортизація на високому рівні" ,
        img: "https://4.bp.blogspot.com/-zpEbDYMj3oI/XCZzjvpUI3I/AAAAAAAAL1U/u2lIW8O-iKQrwL15fxk9g2qu9t9O-uBwQCLcBGAs/s1600/0%2B%252811%2529.jpg"
    },
    {
        id: 3,
        name: "Анастасія",
        text: "Товар відмінний! Вже не вперше купую кросівки в цьому магазині і завжди якість супер! Носяться добре, зручні та що найважливіше-оригінал за більш ніж прийнятною ціною)",
        img: "https://static-cdn5-2.vigbo.tech/u1415/22382/blog/5854957/5350465/70441744/1000-fdb9fc902e6c588970b8483561722114.jpg"
    },
    {
        id: 4,
        name: "Сергій",
        text: "Тут можна придбати круті кроси! Рекомендую!",
        img: "https://2.bp.blogspot.com/-B19ZfmctYyw/XCZsvfLIekI/AAAAAAAAL0A/t5y7fm9MYNwEGuqf2GN9oWTOAbB1nihYACLcBGAs/s1600/0%2B%25286%2529.jpg"
    }
]

const renderSlider = (idCandaidate = 0) => {
    description.name.innerHTML = `${reviews[idCandaidate].name}`
    description.text.innerHTML = `${reviews[idCandaidate].text}`
    imgActive.src=`${reviews[idCandaidate].img}`
    sliderBotton.innerHTML = ''
}

next.addEventListener('click', () => {
    if (indexActive < reviews.length-1) {
       indexActive += 1
   } else {
    indexActive = 0
   }
   renderSlider(indexActive)
})

prev.addEventListener('click', () => {
   if (indexActive == 0) {
    indexActive = reviews.length - 1
   } else {
    indexActive -= 1 
   }
   renderSlider(indexActive)
})