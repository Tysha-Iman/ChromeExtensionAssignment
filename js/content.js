console.log("extension is running!")

var	imgURL = chrome.runtime.getURL("images/old-paper.png");
var imgURL2 = chrome.runtime.getURL("images/vignette.png");


$("*").each( function () {
    var $this = $(this);
    if (parseInt($this.css("fontSize")) < 20) {
        $this.css({ "font-size": "20px" });   
    }
});

//code from https://9to5google.com/2015/06/14/how-to-make-a-chrome-extensions/ for word replacement
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.
            replace(/hello/gi, 'Ahoy, matey');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

// var cursorP = chrome.runtime.getURL("images/cursorpointer.png");
// var cursorH = chrome.runtime.getURL("images/cursorhover.png");

// $(document).css({
//     'position': 'absolute', 
//     'top':'5px',
//     'left':'5px',
//     'cursor': cursorH
// });

// $("body").css("cursor" : "url("+ cursorP +")");


