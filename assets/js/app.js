document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }

  document.getElementById("med-cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("med-card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }




const primaryNav = document.querySelector('.mobile-nav')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      hamburger.setAttribute("aria-expanded",true);
    } else {
      primaryNav.setAttribute("data-visible", false);
      hamburger.setAttribute("aria-expanded", false);
    }
}) 

primaryNav.addEventListener('click', function() {
  primaryNav.setAttribute("data-visible", false);
  hamburger.setAttribute("aria-expanded", false);
  hamburger.classList.toggle('active')
});


const slider = document.querySelector('.slides');
const optionOne = document.querySelector('.option-1');
const optionTwo = document.querySelector('.option-2');
const optionTri = document.querySelector('.option-3');

const bestBuy = document.querySelector('.best-buy');
const cadDrives = document.querySelector('.cad-drives');
const bcit = document.querySelector('.bcit');

var sectionIndex = 0;

optionOne.addEventListener('click', function() {
  slider.style.transform = 'translateY(0%)';
});

optionTwo.addEventListener('click', function() {
  slider.style.transform = 'translateY(-400px)';
});

optionTri.addEventListener('click', function() {
  slider.style.transform = 'translateY(-800px)';
});

bestBuy.addEventListener('click', function() {
  slider.style.transform = 'translateY(0%)';
});

cadDrives.addEventListener('click', function() {
  slider.style.transform = 'translateY(-400px)';
});

bcit.addEventListener('click', function() {
  slider.style.transform = 'translateY(-800px)';
});