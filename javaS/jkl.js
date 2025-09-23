
document.addEventListener('DOMContentLoaded', function () {
  const carouselElement = document.querySelector('#carouselExampleCaptions');
  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 3000, // slide every 3 seconds
    pause: 'hover'   // pause on hover
  });
});
