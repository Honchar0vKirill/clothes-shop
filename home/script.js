const description = {
    name: document.querySelector('#name_active'),
    text: document.querySelector('#text_active')
}

const imgActive = document.querySelector('#img_active')
const sliderBotton = document.querySelector('#sliderBotton')

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
        img: ""
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
        img: "https://d9fb8z61l19d7.cloudfront.net/wp-content/uploads/2022/07/developper-vos-soft-skills.webp"
    }
]

const renderSlider = (idCandaidate = 1) => {
    let indexActive = null
    reviews.forEach((review, index)=> {
        if (review.id === idCandaidate) {
            indexActive = index
        }
    })
    descripyion.name.innerHTML = `${reviews[indexActive].name}`
    descripyion.price.innerHTML = `${reviews[indexActive].text}`
    imgActive.src=`${reviews[indexActive].img}`
    sliderBotton.innerHTML = ''
    const prev = document.querySelector('#btnRrev')
    const next = document.querySelector('#btnNext')

    let setImage = () => {
        imgActive.srs = `${reviews[indexActive].img}`
        description.name = `${reviews[indexActive].name}`
        descripyion.price= `${reviews[indexActive].text}`
    }

    let imgActive = 0
    setImage()

    next.addEventListener('click', () => {
        if (imgActive < length-1) {
           imgActive += 1
       } else {
           imgActive = 0
       }
       setImage()
   })
   
   sliderBtns.prev.addEventListener('click', () => {
       if (imgActive == 0) {
           imgActive = length - 1
       } else {
           imgActive -= 1 
       }
       setImage()
   })
}