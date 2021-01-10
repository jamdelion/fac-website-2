// Wait until the DOM is fully loaded before running the JS
document.addEventListener("DOMContentLoaded", function(){

// ------ CHANGE STYLESHEET --------------------------

function randomStyleOnLoad() {
  let stylesheet = document.createElement('link');
  stylesheet.rel  = 'stylesheet';
  stylesheet.id = "page-style";
  stylesheet.href = 'styles/style-' + (Math.floor(Math.random()*5)+1) + '.css';
  document.getElementsByTagName('head')[0].appendChild(stylesheet);
  };

randomStyleOnLoad();

let colourPalette = document.getElementById("colour-palette");

function changeStylesheet(style) {
  document.getElementById("page-style").setAttribute("href", style);
}

colourPalette.addEventListener("click", () => {
  let currentStylesheet = document.getElementById("page-style");
  let currentStyle = parseInt((currentStylesheet.href).slice(-5,-4));
  let randomNum = Math.floor(Math.random()*5)+1;
  // if the random number generator select the same style, minus 1 from the random number
  if (randomNum == currentStyle) {
    if (randomNum != 1) {
      randomNum -= 1;
    } else {
      randomNum = 5;
    }
  }
  let randomStyle = 'styles/style-' + randomNum + '.css';
  changeStylesheet(randomStyle);
});


  // ------ TOGGLE DARK MODE --------------------------
  let toggleSwitch = document.getElementById("dark-mode-switch");

  function toggleDarkMode() {
      var element = document.body;
      element.classList.toggle("dark-mode");
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log("window matches");
    toggleDarkMode();
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

  const middleNavButtons = document.querySelectorAll(".mn-button");
  let seePhotos = document.querySelectorAll(".see-photos");
  let linkToDetailSlider = document.getElementById("linkToDetailSlider");

  function hideElement(target) {
    target.classList.toggle("hidden");
  }

  function hideAllElements(target) {
    if (!(target.classList.contains("hidden"))) {
      hideElement(target);
    };
  };

  function hideLinkedText(event) {
    // use custom attributes to link content's id to button
    var selectedContentId = event.target.getAttribute("data-linked-text");
    const contentTabs = document.querySelectorAll(".tab");
    var selectedContent = document.getElementById(selectedContentId);

    // if element is hidden, hide all others and show this one
    if (selectedContent.classList.contains("hidden")) {
      contentTabs.forEach(hideAllElements);
      hideElement(selectedContent);
    }
    // if element is showing, hide it (and all others)
    else {
      contentTabs.forEach(hideAllElements);
    }
  }

  middleNavButtons.forEach(function(button) {
      button.addEventListener("click", hideLinkedText)
  });

  seePhotos.forEach(function(button) {
    button.addEventListener("click", hideLinkedText)
  });

  linkToDetailSlider.addEventListener("click", hideLinkedText);

  // ------ SCROLL TO TOP BUTTON --------------------------

  let scrollBtn = document.getElementById("scrollToTop");

  function showScrollBtn() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  window.onscroll = function() {showScrollBtn()};

  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  scrollBtn.addEventListener("click", () => {
    scrollToTop();
  });

  // ------ LINK HIGHTLIGHTING --------------------------

  let linkButtons = document.querySelectorAll(".linkToLinks"); 
  let linkIcons = document.querySelectorAll(".linkIcon");
  let linkToColourPalette = document.getElementById("linkToColourPalette");
  let palette = document.getElementById("colour-palette");

  function HighlightIcon(icon) {
    icon.animate(
      [
        {
          "-webkit-transform": 'translateY(-10px)',
          "-ms-transform": 'translateY(-10px)',
          "transform": 'translateY(-10px)',
          color: 'yellow'
        },
        {
          "-webkit-transform": 'translateY(0px)',
          "-ms-transform": 'translateY(0px)',
          "transform": 'translateY(0px)'
        }
      ], {
        duration: 1000,
        easing: "ease"
      });
};

  function makeLinksShake() {
    linkIcons.forEach(HighlightIcon);
  };

  linkButtons.forEach(function(button) {
    button.addEventListener("click", () => {
      makeLinksShake();
    })
  });

  linkToColourPalette.addEventListener("click", () => {
    HighlightIcon(palette);
  });

  // ----------- CLOSE HAMBURGER MENU ---------

  let hblinks = document.querySelectorAll(".inner-hamburger");
  let checkbox = document.getElementById('hidden-checkbox');

  function closeHamburgerMenu(event) {
    checkbox.checked = false;
  }

  hblinks.forEach(function(button) {
    button.addEventListener("click", () => {
      closeHamburgerMenu();
    })
  });

});
