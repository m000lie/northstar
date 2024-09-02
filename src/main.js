

// add classes for mobile navigation toggling
var CSbody = document.querySelector('body')
const CSnavbarMenu = document.querySelector('#cs-navigation')
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle')

CShamburgerMenu.addEventListener('click', function () {
  closeMobileNav(CShamburgerMenu, CSnavbarMenu, CSbody, ariaExpanded)
})

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded () {
  const csUL = document.querySelector('#cs-expanded')
  const csExpanded = csUL.getAttribute('aria-expanded')

  if (csExpanded === 'false') {
    csUL.setAttribute('aria-expanded', 'true')
  } else {
    csUL.setAttribute('aria-expanded', 'false')
    4
  }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll
// animations with the navbar

document.addEventListener('scroll', e => {
  const scroll = document.documentElement.scrollTop
  if (scroll >= 100) {
    document.querySelector('body').classList.add('scroll')
  } else {
    document.querySelector('body').classList.remove('scroll')
  }
})

// mobile nav toggle code
const dropDowns = Array.from(
  document.querySelectorAll('#cs-navigation .cs-dropdown')
)
for (const item of dropDowns) {
  const onClick = () => {
    item.classList.toggle('cs-active')
  }
  item.addEventListener('click', onClick)
}

const csLinks = document.querySelectorAll('#cs-navigation .cs-li-link')

csLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Remove 'cs-active' class from all links
    csLinks.forEach(l => l.classList.remove('cs-active'))
    // Add 'cs-active' class to the clicked link
    this.classList.toggle('cs-active')
    closeMobileNav(CShamburgerMenu, CSnavbarMenu, CSbody, ariaExpanded)
  })
})

// this handles opening/closing mobile nav menu
function closeMobileNav (HBmenu, NBmenu, body, ariaExpand) {
  HBmenu.classList.toggle('cs-active')
  NBmenu.classList.toggle('cs-active')
  body.classList.toggle('cs-open')
  // run the function to check the aria-expanded value
  ariaExpand()
}
