  // Wait until the DOM is fully loaded before running the JS
document.addEventListener("DOMContentLoaded", function(){


function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

let toggleSwitch = document.getElementById("switch");

toggleSwitch.addEventListener("click", toggleDarkMode);



});
