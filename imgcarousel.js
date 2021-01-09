// Wait until the DOM is fully loaded before running the JS
document.addEventListener("DOMContentLoaded", function(){

  var images = document.getElementsByClassName("images");
  const navNumbers = document.querySelectorAll(".img-nav");
  var nextButton = document.getElementById("next-icon");
  var prevButton = document.getElementById("prev-icon");
  var slideIndex = 1;
  var pauseIcon = document.getElementById('pauseIcon');
  var playIcon = document.getElementById('playIcon');
  var playPause = document.getElementById("playPause");

  function playSlides() {
    if (!playPause.classList.contains("play")) {
      changeSlide(1);
      setTimeout(playSlides, 1500);
    }
  }

  function showImages(targetSlideIndex) {
    slideIndex = targetSlideIndex;
    if (slideIndex > images.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = images.length;
    }
    for (i = 0; i < images.length; i++) {
        images[i].classList.add("hidden-img");
        navNumbers[i].classList.remove("active");
    }
    images[slideIndex-1].classList.remove("hidden-img");
    navNumbers[slideIndex-1].classList.add("active")
  }

  function clickToImage(elem) {
    var buttonNum = parseInt(elem.innerHTML);
    showImages(buttonNum);
  }

  navNumbers.forEach(function(navNumber) {
    navNumber.addEventListener("click", () => {
      clickToImage(navNumber);
    });
  });

  function changeSlide(increment) {
    showImages(slideIndex + increment);
  }

  // on click play slides
  playPause.onclick = function() {
    // does playbutton class contains "play" (true or false)
    var playing = !playPause.classList.toggle("play");
    // change icon from play to pause icon if slideshow playing
    playIcon.classList.toggle("hidden-img");
    pauseIcon.classList.toggle("hidden-img");
    if (playing) {
      playSlides();
    }
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

  prevButton.addEventListener("click", () => {
    changeSlide(-1);
  });

  nextButton.addEventListener("click", () => {
    changeSlide(1);
  });

});
