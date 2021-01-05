// Wait until the DOM is fully loaded before running the JS
document.addEventListener("DOMContentLoaded", function(){

    // ------ Detail slider --------------------------

    let circleMarks = document.querySelectorAll(".circle-mark"); // array
    let lines = document.querySelectorAll(".line"); // array
    let options = document.querySelectorAll(".option"); // array
    let line1 = document.getElementById("line1");
    let line2 = document.getElementById("line2");
    let circle1 = document.getElementById("circle1");
    let circle2 = document.getElementById("circle2");

    function thicken(target) {
        target.classList.toggle("thick");
    }

    function toggleFillBackground(target) {
        target.classList.toggle("filled");
    }

    function invisibiliseElement(target) {
        target.classList.toggle("invisible");
    }

    function invisibiliseAllElements(target) {
        if (!(target.classList.contains("invisible"))) {
        invisibiliseElement(target);
        };
    };

    function unthickenAll(target) {
        if ((target.classList.contains("thick"))) {
        thicken(target);
        };
    };

    function unfillAll(target) {
        if ((target.classList.contains("filled"))) {
            toggleFillBackground(target);
        };
    };

    function changeDetailLevel(event) {
        // restore everything to not-thick
        circleMarks.forEach(unthickenAll);
        circleMarks.forEach(unfillAll);
        lines.forEach(unthickenAll);
        options.forEach(unthickenAll);

        // thicken circle and corresponding lines
        thicken(event.target);
        if (event.target.id == "circle2") {
            thicken(line1);
            thicken(mark2);
            toggleFillBackground(circle1)
        }
        else if (event.target.id == "circle3") {
            thicken(line1);
            thicken(line2);
            thicken(mark3);
            toggleFillBackground(circle1)
            toggleFillBackground(circle2)
        }
        else {
            thicken(mark1);
        }

        // use custom attributes to link content's id to button
        var selectedContentId = event.target.getAttribute("data-linked-text");

        const amDetails = document.querySelectorAll(".am-detail");
        var selectedContent = document.getElementById(selectedContentId);

        // if element is invisible, hide all others and show this one
        if (selectedContent.classList.contains("invisible")) {
        amDetails.forEach(invisibiliseAllElements);
        invisibiliseElement(selectedContent);
        }
    }

    circleMarks.forEach(function(button) {
        button.addEventListener("click", changeDetailLevel)
    }); 

});
