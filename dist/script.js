/*--------------------------prev/next---------------------------*/
  var slideIndex = 1;
      showDivs(slideIndex);
      caption(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length ; i++) {
       x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }

/*--------------------------automatic---------------------------*/
  var myIndex = 0;
      auto();
  
  function auto() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length ; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(auto, 3000);
  }

/*--------------------------upload---------------------------*/
function upload() {
  var url1 = document.getElementById("url1").value;
      url2 = document.getElementById("url2").value;
      url3 = document.getElementById("url3").value;
	img1.setAttribute("src", url1);
	img2.setAttribute("src", url2);
	img3.setAttribute("src", url3);
}


var form = document.getElementById("addUrl");

function addImage() {
  var x = document.createElement("input");
    form.x.setAttribute("type", url);
}

function update() {
  var x = document.getElementById("textAlign").option.text;
      y = document.getElementsByClassName("caption");
    y.setAttribute("text-align", x);
}