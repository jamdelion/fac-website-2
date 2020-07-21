// Wait until the DOM is fully loaded before running the JS
document.addEventListener("DOMContentLoaded", function(){

  // IMAGE CAROUSEL

  function playSlides() {
    nextSlide(1);
    setTimeout(playSlides, 3000);
  }

  var slideIndex = 1;

  function showImages(n) {
    var images = document.getElementsByClassName("images");
    if (n > images.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = images.length;
    }
    for (i = 0; i < images.length; i++) {
        images[i].classList.add("hidden")
    }
    images[slideIndex-1].classList.remove("hidden")
  }

  function nextSlide(n) {
    showImages(slideIndex += n);
  }

// Enable key press control
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 37:
        nextSlide(-1);
        break;
      case 39:
        nextSlide(1);
        break;
    }
  };



});
