const track1 = document.querySelector('.carousel-track1');
const prevButton1 = document.querySelector('.prev-btn1');
const nextButton1 = document.querySelector('.next-btn1');
const images1 = document.querySelectorAll('.pokemon-img1');

if (track1 && prevButton1 && nextButton1 && images1.length > 0) {
  let index1 = 0;

  function updateCarousel1() {
    const imgWidth = images1[0].offsetWidth;
    track1.style.transform = `translateX(-${index1 * imgWidth}px)`;
  }

  nextButton1.addEventListener('click', () => {
    index1 = (index1 + 1) % images1.length;
    updateCarousel1();
  });

  prevButton1.addEventListener('click', () => {
    index1 = (index1 - 1 + images1.length) % images1.length;
    updateCarousel1();
  });

  window.addEventListener('resize', updateCarousel1);
  updateCarousel1(); // initial position
}

const navToggle = document.querySelector('#navToggle');
  const mobileMenu = document.querySelector('#mobileMenu');

  navToggle.addEventListener('click', (e) => {
    e.preventDefault(); 
    mobileMenu.classList.toggle('hidden');
  });