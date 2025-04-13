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
  

  








