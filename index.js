//Dropdown
document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.getElementById('dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const sidebarLinks = document.querySelectorAll('.side-bar .side a');
  
    // Populate dropdown with sidebar links
    sidebarLinks.forEach(link => {
      const menuItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.textContent = link.textContent;
      menuItem.appendChild(anchor);
      dropdownMenu.appendChild(menuItem);
    });
  
    // Toggle dropdown menu
    dropdownToggle.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent event from bubbling
      dropdownMenu.classList.toggle('show');
      dropdownToggle.classList.toggle('active');
    });
  
    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
      if (!dropdownToggle.contains(event.target)) {
        dropdownMenu.classList.remove('show');
        dropdownToggle.classList.remove('active');
      }
    });
  });
 // Carousel
  const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

// Fixed Navbar
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 10) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
//Button ripple effect
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.pageX
        const y = e.pageY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})

//Scroll Animation
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}