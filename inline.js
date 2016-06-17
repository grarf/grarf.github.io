<script type="text/javascript">
var cat1 = [
    "http://arborjs.org",
    "http://cartodb.com",
    "http://vis4.net/labs/185"
    ];

var myFrame = document.getElementById("frame");

function getRandomUrl(myFrame) {
   var index = Math.floor(Math.random()*cat1.length);
   var url = cat1[index];
   myFrame.src = url;
}

btn.addEventListener("click", function() {
    
   getRandomUrl(myFrame); 
</script>
