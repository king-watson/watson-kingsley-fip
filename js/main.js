document.addEventListener("DOMContentLoaded", () => {
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
  });

 
  const track = document.querySelector('.carousel-track1');
  const slides = Array.from(track.children);
  const prevButton = document.querySelector('.prev-btn1');
  const nextButton = document.querySelector('.next-btn1');
  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  // Make sure it adjusts on window resize
  window.addEventListener('resize', updateCarousel);


  

  








