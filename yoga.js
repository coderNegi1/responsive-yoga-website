let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})



// scropt for navbar scrolling bg color cnage
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll("#navbar a");

window.onscroll = () => {
  if (window.scrollY >= 200) {
    navbar.style.backgroundColor = '#FFFFFF'; 
    navLinks.forEach(link => {
      link.style.color = '#0389FF'; 
    });
  } else {
    navbar.style.backgroundColor = '#0389FF'; 
    navLinks.forEach(link => {
      link.style.color = '#FFFFFF'; 
    });
  }
};




