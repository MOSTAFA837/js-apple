// Common JS
document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach(control => {
    control.addEventListener('click', e => {
        e.preventDefault()
    })
})

// Cube

let x = 0
let y = 20
let z = 0
let bool = true
let interval;

const cube = document.querySelector('.cube')

document.querySelector('.top-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.bottom-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.left-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${z}deg)`
})

document.querySelector('.right-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg)`
})

document.querySelector('.top-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg)`
})

document.querySelector('.bottom-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg)`
})

const playPause = () => {
    if(bool) {
        interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
        }, 100)
    } else {
        clearInterval(interval)
    }
}

playPause();

document.querySelector('.controls').addEventListener('mouseover', () => {
    bool = false
    playPause()
})

document.querySelector('.controls').addEventListener('mouseout', () => {
    bool = true
    playPause()
})


// End Cube


// slideshow

/*
    --slideshowDivs() 
        creates 5 divs and append 5 images to the divs,
        it adds the class change which is change the opacity from 0 to 1,
        and append the 5 divs whith images to the DOM .

*/
const slideshowDids = () => {
    for (let i = 1; i <= 5; i++) {
        const div = document.createElement('div');

        div.style.backgroundImage = `url(images/slideshow/slideshow-${i}.jpg)`

        i === 1 && div.classList.add('change')

        document.querySelector('.slideshow').appendChild(div);
    }
}

slideshowDids();

/*
    first hold the 5 divs,
    use the setInterval() to change between the images

*/

const divs = document.querySelectorAll('.slideshow div');

let a = 1;

const slideshow = () => {
    setInterval(() => {
        a++

        const div = document.querySelector('.slideshow .change');

        div.classList.remove('change');

        if (a < divs.length) {
            div.nextSibling.classList.add('change');
        } else {
            divs[0].classList.add('change');
            a = 1;
        }
    }, 15000);
}

slideshow();

// End slideshow

// MacBook Section
const macBook = document.querySelector('.macbook');

window.addEventListener('scroll', () => {
    if (window.pageYOffset + window.innerHeight >=
        macBook.offsetTop + macBook.offsetHeight / 2) {
            macBook.classList.add('change')
    }
})

// Watches Section
const watchBands = document.querySelector('.watch-bands');
const watchCases = document.querySelector('.watch-cases');

const watchTopControl = document.querySelector('.watch-top-control');
const watchRightControl = document.querySelector('.watch-right-control');
const watchBottomControl = document.querySelector('.watch-bottom-control');
const watchLeftControl = document.querySelector('.watch-left-control');

let axisX = 0;
let axisY = 0;

const hideControl = () => {
    if (axisY === -280) {
        watchTopControl.classList.add('hideControl')
    } else {
        watchTopControl.classList.remove('hideControl')
    }

    if (axisY === 280) {
        watchBottomControl.classList.add('hideControl')
    } else {
        watchBottomControl.classList.remove('hideControl')
    }

    if (axisX === 280) {
        watchRightControl.classList.add('hideControl')
    } else {
        watchRightControl.classList.remove('hideControl')
    }

    if (axisX === -280) {
        watchLeftControl.classList.add('hideControl')
    } else {
        watchLeftControl.classList.remove('hideControl')
    }
}

watchTopControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY -= 70}rem`

    hideControl();
})

watchBottomControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY += 70}rem`

    hideControl();
})

watchRightControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX += 70}rem`

    hideControl();
})

watchLeftControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX -= 70}rem`

    hideControl();
})