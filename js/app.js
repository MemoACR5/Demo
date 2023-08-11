const navLinks = document.querySelector(".links");
const burger = document.querySelector('.burger');
const faders = document.querySelectorAll(".faders");

burger.addEventListener('click', () =>{
    burger.classList.toggle('toggle');
    navLinks.classList.toggle('on-click');;
});

const appearOptions = {
threshold: 0,
rootMargin: "0px 0px -250px 0px"
};


const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
    if (!entry.isIntersecting) {
        return;
    } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
    }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

  



  



  






