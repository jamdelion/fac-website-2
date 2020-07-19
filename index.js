  // Wait until the DOM is fully loaded before running the JS
document.addEventListener("DOMContentLoaded", function(){


    // ------ TOGGLE COLOUR MODE --------------------------
    let toggleSwitch = document.getElementById("switch");

    function toggleDarkMode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    function toggleSunMoon() {
      var sunMoon = document.getElementById('sun-moon');
      sunMoon.classList.toggle("fa-moon");
      toggleSwitch.classList.toggle("white");
      sunMoon.classList.toggle("fa-sun");
    }

    toggleSwitch.addEventListener("click", () => {
      toggleDarkMode();
      toggleSunMoon();
    });


    // ------ MIDDLE NAV BUTTONS --------------------------

    const middleNavButtons = document.querySelectorAll(".nav-button"); // array

    function hideElement(target) {
        target.classList.toggle("hidden");
    }

    function hideLinkedText(event) {
        var textId = event.target.getAttribute("data-linked-text");
        hideElement(document.getElementById(textId));
    }

    middleNavButtons.forEach(function(button) {
        button.addEventListener("click", hideLinkedText)
    });



});
