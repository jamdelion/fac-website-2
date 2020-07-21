// Wait until the DOM is fully loaded before running the JS
document.addEventListener("DOMContentLoaded", function(){

  // IMAGE CAROUSEL

  var slideIndex = 1;

  function showImage(n) {
    var images = document.getElementsByClassName("images");
    var dots = document.getElementsByClassName("dot");
    if (n > images.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = images.length;
    }
    for (i = 0; i < images.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    images[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

      // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Image control by dot
  function showDotSlide(n) {
    showImages(slideIndex = n);
  }

// Enable key press control
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 37:
        plusSlides(-1);
        break;
      case 39:
        plusSlides(1);
        break;
    }
  };

  // show initial slide
  showSlides(slideIndex);

      // nextButton.onclick = function() {
      //   if (playButton.classList.contains("play")) {
      //     nextSlide();
      //   }
      // }
      //
      // prevButton.onclick = function() {
      //   if (playButton.classList.contains("play")) {
      //     prevSlide();
      //   }
      // }



        // var timeLapse = 1000;

        // Buttons
        // var playButton = document.querySelector('.pause');
        // var prevButton = document.querySelector(".prev");
        // var nextButton = document.querySelector(".next");
        // var playIcon = document.getElementById('playIcon');




        // // make dots clickable
        // for (var j = 0; j < dotsArray.length; j++) {
        //   dotsArray[j].onclick = function(event) {
        //     // if the carousel not playing, change the image to the same index as the dot
        //     var dotIndex = Array.from(dotsArray).indexOf(event.target);
        //     if (playButton.classList.contains("play")) {
        //       slide.src = images[dotIndex];
        //       // match the slideIndex with the dotIndex
        //       slideIndex = dotIndex;
        //       // change unclicked dots to not active
        //       Array.from(dotsArray).forEach(function(dot) {
        //         dot.classList.remove("active")
        //       });
        //       dotsArray[dotIndex].classList.toggle("active");
        //     }
        //   }
        // }


        // on click play slides
        // playButton.onclick = function() {
        //   // does playbutton class contains "play" (true or false)
        //   var playing = !playButton.classList.toggle("play");
        //   // change icon from play to pause icon if slideshow playing
        //   playIcon.classList.toggle("fas");
        //   playIcon.classList.toggle("hidden");
        //   pauseIcon.classList.toggle("fas");
        //   pauseIcon.classList.toggle("hidden");
        //   // if "play" not in classlist, playslides (start function)
        //   if (playing) {
        //     playSlides();
        //   }
        // }

        // Automatic play (change images)
        // function playSlides() {
        //   while (!playButton.classList.contains("play")) {
        //     nextSlide(1);
        //     setTimeout(playSlides, 2000);
        //   }
        // }


});
