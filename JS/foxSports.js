var slideIndex = 0;
var paragraphIndex=0
var form=document.getElementById('form')
var langButton=document.getElementById('langButton')
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

function myfunc() {
    alert('You have to Enter a valid Phone Number')
    
}
// function changeLanguage() {
   

//     langButton.innerHTML('English')
// }

let flag=false

  function arabic() {

   
        // document.getElementById('Arabic').style.visibility = 'hidden';

        document.getElementById("p1").innerHTML = "اصابة مدافع ريال مدريد(جيتافي) بكسر في الركبة";
        document.getElementById("p2").innerHTML = "تتصددر اللاعبة الاوكرانية الدوري لهذا الموسم";
        document.getElementById("p3").innerHTML = "تم تأجيل المبارة النهائية بسبب الظروف الجوية";

        document.getElementById("final").innerHTML = " سجل الان وتابع اخر الاخبار والبرامج  الرياضية التي تهمك";

        document.getElementById("Mobile Number").innerHTML = "رقم الهاتف";
        document.getElementById("Verification Code").innerHTML = "رمز التأكيد ";

        document.getElementById("Mobile Number").style.float='right'
        document.getElementById("Verification Code").style.float='right'

        // document.getElementById("Mobile Number").style.marginLeft='50%'
        // document.getElementById("Verification Code").style.marginLeft='50%'
        // document.getElementById("Mobile Number").style.marginRight='0px'
        // document.getElementById("Verification Code").style.marginRight='0px'
        // document.getElementById("Verification Code").setAttribute('placeholder','رمز التأكيد')

        document.getElementById("button").innerHTML = "التسجيل للدخول";
        document.getElementById("breaking").innerHTML = "الأخبار الحصرية";

        document.getElementById("videos").innerHTML = "أشهر الفيديوهات الرياضية سجل وشاهد الان";

        document.getElementById("catagoried1").innerHTML = "كرة القدم";
        document.getElementById("catagoried2").innerHTML = "التنس";
        document.getElementById("catagoried3").innerHTML = "الطائرة";
        document.getElementById("catagoried4").innerHTML = "السباحة";
            
        
    
      
  }

  function english() {


    document.getElementById("p1").innerHTML = "Getafe secure shock win over Real Madrid";
    document.getElementById("p2").innerHTML = "Stokes backs Root and Silverwood";
    document.getElementById("p3").innerHTML = "30-LOVE: THE NEXT GREAT AMERICAN PLAYER";

    document.getElementById("Mobile Number").innerHTML = "Mobile Number";
    document.getElementById("Verification Code").innerHTML = "Verification Code ";

    document.getElementById("Mobile Number").style.float='left'
        document.getElementById("Verification Code").style.float='left'

        document.getElementById("final").innerHTML = " Follow the latest news and have a remarkable experience and SIGN UP NOW";
        
    //     document.getElementById("Mobile Number").style.marginLeft='0px'
    //     document.getElementById("Verification Code").style.marginLeft='0px'
    
    // document.getElementById("Verification Code").;
    // document.getElementById("Verification Code").setAttribute('placeholder','رمز التأكيد')

    document.getElementById("button").innerHTML = "SIGN UP";
    document.getElementById("breaking").innerHTML = "Breaking News";

    document.getElementById("videos").innerHTML = "THE MOST POPULAR SPORT VIDEOS";

    document.getElementById("catagoried1").innerHTML = "Football";
    document.getElementById("catagoried2").innerHTML = "Tennis";
    document.getElementById("catagoried3").innerHTML = "Cricket"
    document.getElementById("catagoried4").innerHTML = "Swimming"
      
  }

