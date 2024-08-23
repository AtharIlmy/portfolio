// toggle  icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let div = document.querySelectorAll('div');
let navlinks = document.querySelectorAll('header nav a');



// scroll sections
window.onscroll = () => {
    div.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active div for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on srcoll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header')

    header.classList.toggle('sticky' , window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}