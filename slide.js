const slides = document.querySelectorAll(".slide")
// console.log(slides)
var counter = 0;
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const Prev = () => {
    counter--
    slideImage()
}

const Next = () => {
    counter++
    slideImage()
}
const slideImage = () => {
    slides.forEach (
        (slide) => {
            slide.style.transform = `translatex(-${counter * 100}%)`
        }
    )
}

function fun(){
    window.open("login.html");
}