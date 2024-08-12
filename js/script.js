let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

const sr = ScrollReveal({
    distance: '400px',
    duration: 2500,
    resert: true
});

sr.reveal('.logo',{delay:200,origin: 'left'});
sr.reveal('.navbar',{delay:400,origin: 'top'});
sr.reveal('.menu-btn',{delay:520,origin:  'right'});


sr.reveal('.home-text span',{delay:600,origin:  'top'});
sr.reveal('.home-text h1',{delay:680,origin:  'left'});
sr.reveal('.home-text p',{delay:750,origin:  'right'});

sr.reveal('.about-text span',{delay:600,origin:  'top'});
sr.reveal('.about-text h2',{delay:680,origin:  'left'});
sr.reveal('.about-text p',{delay:750,origin:  'right'});
sr.reveal('.isi',{delay:750,origin:  'right'});

sr.reveal('.galery-text span',{delay:600,origin:  'top'});
sr.reveal('.galery-text h2',{delay:680,origin:  'left'});
sr.reveal('.galery-text p',{delay:750,origin:  'right'});
sr.reveal('.card-list',{delay:750,origin:  'left'});
sr.reveal('.card-item',{delay:750,origin:  'left'});

sr.reveal('.contact-text span',{delay:600,origin:  'top'});
sr.reveal('.contact-text h2',{delay:680,origin:  'left'});
sr.reveal('.contact-text p',{delay:750,origin:  'right'});

sr.reveal('.share p',{delay:950,origin: 'left'});
sr.reveal('.social',{delay:950,origin: 'left'});

sr.reveal('.home-img',{delay:1000,origin: 'right'});
sr.reveal('.alamat',{delay:1000,origin: 'left'});