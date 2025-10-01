// Select the carousel element
var myCarousel = document.querySelector('#carouselExampleCaptions');

// Initialize the Bootstrap carousel
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,  // 3 seconds per slide
  ride: 'carousel' // start automatically
});

