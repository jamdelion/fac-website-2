// Wait until the DOM is fully loaded before running the JS
document.addEventListener("DOMContentLoaded", function(){

  // IMAGE CAROUSEL

  function playSlides() {
    nextSlide(1);
    setTimeout(playSlides, 3000);
  }

  var slideIndex = 1;

  function showImages(targetSlideIndex) {
    console.log("n", targetSlideIndex);
    slideIndex = targetSlideIndex;
    var images = document.getElementsByClassName("images");
    var navNumbers = document.getElementsByClassName("img-nav");
    if (slideIndex > images.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = images.length;
    }
    for (i = 0; i < images.length; i++) {
        images[i].classList.add("hidden");
        navNumbers[i].classList.remove("active");
    }
    images[slideIndex-1].classList.remove("hidden");
    navNumbers[slideIndex-1].classList.add("active")
  }

  // function clickToImage(elem) {
  //   var navNumbers = document.getElementsByClassName("img-nav");
  //   for (i = 0; i < navNumbers.length; i++) {
  //       var buttonNum = navNumbers[i].innerHTML;
  //       showImages(buttonNum);
  //   }
  // }

  function clickToImage(elem) {
    var buttonNum = parseInt(elem.innerHTML);
    showImages(buttonNum);
  }

  const navNumbers = document.querySelectorAll(".img-nav");
  navNumbers.forEach(function(navNumber) {
    navNumber.addEventListener("click", () => {
      clickToImage(navNumber);
    });
  });


  function changeSlide(increment) {
    showImages(slideIndex + increment);
  }

// Enable key press control
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 37:
        changeSlide(-1);
        break;
      case 39:
        changeSlide(1);
        break;
    }
  };



});
