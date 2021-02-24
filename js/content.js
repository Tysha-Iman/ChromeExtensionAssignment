console.log("extension is running!")

var	imgURL = chrome.runtime.getURL("images/old-paper.png");
var imgURL2 = chrome.runtime.getURL("images/vignette.png");


$("body").css("background-image", "url("+ imgURL +")");

$("*").each( function () {
    var $this = $(this);
    if (parseInt($this.css("fontSize")) < 20) {
        $this.css({ "font-size": "20px" });   
    }
});


