console.log("JS file is working");

// Carousal

const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const images = document.querySelectorAll('.pokemon-img');

let index = 0;

function updateCarousel() {
  const imgWidth = images[0].offsetWidth;
  track.style.transform = `translateX(-${index * imgWidth}px)`;
}

nextButton.addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);


// Promo Lightbox
  
const promos = [
  {
    title: "2 For The Price of 1",
    description: "Buy 1 Burple product get another one free!"
  },
  {
    title: "20% Off For New Customers",
    description: "New around here? Get 20% off first order"
  },
  {
    title: "Free Shipping",
    description: "Enjoy free shipping on all orders over $25."
  }
];

const promoButton = document.querySelector('#promo-btn');
const lightbox = document.querySelector('#promo-lightbox');
const closeButton = document.querySelector('#close-btn');
const promoTitle = document.querySelector('#promo-title');
const promoDescription = document.querySelector('#promo-description');

promoButton.addEventListener('click', () => {
  const randomPromo = promos[Math.floor(Math.random() * promos.length)];
  promoTitle.textContent = randomPromo.title;
  promoDescription.textContent = randomPromo.description;
  lightbox.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});


const hotspots = document.querySelectorAll('.hotspot');
const infoBox = document.querySelector('#flavour-info-box');
const title = document.querySelector('#flavour-title');
const description = document.querySelector('#flavour-description');
const closeBtn = document.querySelector('.info-close');

hotspots.forEach(hotspot => {
  hotspot.addEventListener('click', () => {
    title.textContent = hotspot.getAttribute('data-title');
    description.textContent = hotspot.getAttribute('data-description');
    infoBox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  infoBox.style.display = 'none';
});

infoBox.addEventListener('click', (e) => {
  if (e.target.id === 'flavour-info-box') {
    infoBox.style.display = 'none';
  }
});


  const navToggle = document.querySelector('#navToggle');
  const mobileMenu = document.querySelector('#mobileMenu');

  navToggle.addEventListener('click', (e) => {
    e.preventDefault(); // stop the page from jumping to top
    mobileMenu.classList.toggle('hidden');
  });


