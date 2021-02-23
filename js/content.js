console.log("extension is running!")

// TRY: updating the text content of an element or set of elements on one or more pages
$("h1").text("The big oof!")

// TRY: adding a click event listener to an element that changes the background of that element to a new color
var	imgURL = chrome.runtime.getURL("imgs/banner.jpg");
$("header").after("<img	src=" + imgURL + "class='banner'>")

// TRY: using a mouseenter event listener to update text to something new.
$("div").on("click", myfunction)