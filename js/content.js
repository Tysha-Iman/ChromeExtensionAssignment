console.log("extension is running!")

var	imgURL = chrome.runtime.getURL("images/old-paper.png");
var imgURL2 = chrome.runtime.getURL("images/vignette.png");
var cursorP = chrome.runtime.getURL("images/cursorpointer.png");
var cursorH = chrome.runtime.getURL("images/cursorhover.png");

$("body").css("background-image", "url("+ imgURL +")");
// $("body").addClass("cursorimg"); 

// $(document).ready(function(){
//  var cursor = $('.cursorimg');
// });

$("*").each( function () {
    var $this = $(this);
    if (parseInt($this.css("fontSize")) < 20) {
        $this.css({ "font-size": "20px" });   
    }
});


