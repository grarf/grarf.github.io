<script type="text/javascript">
// cookie value geetter
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Knuth array shuffle
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;
	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue;
    }
    return array;
}

// Open in new Window
var windowLinks = shuffle([
    "http://www.stumbleupon.com/",
    "http://www.theawesomer.com",
    "http://www.factslides.com", 
]);
var windowLinksIndex = 0;
// maybe this should be equal to windowLinks?
var iframeLinks = shuffle([
    "http://www.stumbleupon.com/",
    "http://www.theawesomer.com",
    "http://www.factslides.com",
]);
var iframeLinksIndex = 0;

if(!!readCookie('windowlinkscookie')&&!!readCookie('windowlinkscookieindex')){
    windowLinks = readCookie('windowlinkscookie').split(',');
    windowLinksIndex = parseInt(readCookie('windowlinkscookieindex'));
}else{
    document.cookie = 'windowlinkscookie=' + windowLinks.join(',');
    document.cookie = 'windowlinksindex=' + windowLinksIndex;
}
if(!!readCookie('framelinkscookie')&&!!readCookie('framelinkscookieindex')){
    windowLinks = readCookie('framelinkscookie').split(',');
    windowLinksIndex = parseInt(readCookie('framelinkscookieindex'));
}else{
    document.cookie = 'framelinkscookie=' + windowLinks.join(',');
    document.cookie = 'framelinkscookieindex=' + windowLinksIndex;
}


openStuff = function () {
    var link = windowLinks[windowLinksIndex];
    windowLinksIndex++;
    window.open(link);
};

// Open in iFrame

var myFrame = document.getElementById("frame");
function getRandomUrl(myFrame) {
    var url = iframeLinks[iframeLinksIndex];
    iframeLinksIndex++;
    myFrame.src = url;
}
var refreshBtn = document.getElementById("btn");
refreshBtn.addEventListener("click", function() {
    getRandomUrl(myFrame); 
});

window.onload = function(){
    getRandomUrl(myFrame);
};
</script>
