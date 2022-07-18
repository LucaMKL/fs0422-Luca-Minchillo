let left = 0;

function move(){

    let allSlides = document.querySelectorAll('#slider .wrapper img')
    let firstSlideWidth = document. querySelector('#slider .wrapper img').clientWidth
    let sliderWidth = document. querySelector('#slider').clientWidth
    let space = Math.trunc(sliderWidth / firstSlideWidth)
    
    let wrapper = document. querySelector('#slider .wrapper')
    
    console.log(space)

    left += 600

    wrapper.style.left = left + 'px'
}