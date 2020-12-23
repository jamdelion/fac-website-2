// Wait until the DOM is fully loaded before running the JS
document.addEventListener("DOMContentLoaded", function(){

    // ------ Detail slider --------------------------

    let circleMarks = document.querySelectorAll(".circle-mark"); // array
    let lines = document.querySelectorAll(".line"); // array
    let line1 = document.getElementById("line1");
    let line2 = document.getElementById("line2");

    function thicken(target) {
        console.log("thickenLine");
        target.classList.toggle("thick");
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
        console.log("unthickenAll");
        if ((target.classList.contains("thick"))) {
        thicken(target);
        };
    };

    function changeDetailLevel(event) {
        console.log("changeDetailLevel");

        // restore everything to not-thick
        circleMarks.forEach(unthickenAll);
        lines.forEach(unthickenAll);

        // thicken circle and corresponding lines
        thicken(event.target);
        if (event.target.id == "circle2") {
        thicken(line1);
        }
        else if (event.target.id == "circle3") {
        thicken(line1);
        thicken(line2);
        }

        // use custom attributes to link content's id to button
        var selectedContentId = event.target.getAttribute("data-linked-text");
        console.log(selectedContentId);

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
