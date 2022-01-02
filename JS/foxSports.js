var slideIndex = 0;
var paragraphIndex=0
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var paragraph = document.getElementsByClassName("paragraph");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  

  
  for (i = 0; i < paragraph.length; i++) {
    paragraph[i].style.display = "none";  
  }
  paragraphIndex++;
  if (paragraphIndex > paragraph.length) {paragraphIndex = 1} 


  slides[slideIndex-1].style.display = "block";  
  paragraph[paragraphIndex-1].style.display = "block"; 

  setTimeout(showSlides, 3000); // Change image every 2 seconds
}


// function advertisements() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var paragraph = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}    
//     for (i = 0; i < paragraph.length; i++) {
//       paragraph[i].className = paragraph[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     paragraph[slideIndex-1].className += " active";
//     setTimeout(showSlides, 3500); // Change image every 2 seconds
//   }