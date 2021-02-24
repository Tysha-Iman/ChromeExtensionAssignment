console.log("extension is running!")

var	imgURL = chrome.runtime.getURL("images/old-paper.png");
var imgURL2 = chrome.runtime.getURL("images/vignette.png");


$("*").each( function () {
    var $this = $(this);
    if (parseInt($this.css("fontSize")) < 20) {
        $this.css({ "font-size": "20px" });   
    }
});

var cursorP = chrome.runtime.getURL("images/cursorpointer.png");
var cursorH = chrome.runtime.getURL("images/cursorhover.png");

$document.css({
    'position': 'absolute', 
    'top':'5px',
    'left':'5px',
    'cursor': cursorH
});

// var Normalwords = new array ["hello", "yes", "my", "?", "you"];
// var PirateSlang = new array ["Ahoy, matey", "aye", "me", "Savvy?", "ye"];
// var ourNewString = Normalwords
//     .replace("hello", "Ahoy")
//     .replace("yes", "aye")
//     .replace("my", "me")
//     .replace("?", "Savvy?")
//     .replace("you", "ye");

// console.log(ourNewString);


// $("body").css("cursor" : "url("+ cursorP +")");


