
// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

//Show Hamburguer Icon
var theToggle = document.getElementById('toggle');
theToggle.onclick = function (){
    
    if(theToggle.classList.toggle("on")){
        document.body.style.overflow = 'hidden';
        
    }else{
        document.body.style.overflow = '';
        document.getElementById("toggle").style.transition= 'all .5s';
        [ 'toggle', 'menu'].forEach(function( id ) {
            document.getElementById( id ).style.transition= 'all .5s';
        });
    }
}

//On click, the hamburguer icon and the menu disappear. this is only for mobile
function goToPortfolio(){
    /*document.getElementById('portfolio').scrollIntoView({behavior:"smooth"})*/
    theToggle.classList.remove("on");
    document.body.style.overflow = '';
    [ 'toggle', 'menu'].forEach(function( id ) {

        document.getElementById( id ).style.transition= 'all .5s';
        
        });
    };

//On click, the hamburguer icon and the menu disappear. this is only for mobile     
function goToAbout(){
    /*document.getElementById('about').scrollIntoView({behavior:"smooth"})*/ /*fazer scroll into view??*/
    theToggle.classList.remove("on");
    document.body.style.overflow = '';
    [ 'toggle', 'menu'].forEach(function( id ) {

        document.getElementById( id ).style.transition= 'all .5s';
        
    });
};

//On click, the hamburguer icon and the menu disappear. this is only for mobile     
function goToWork(){
    /*document.getElementById('footer').scrollIntoView({behavior:"smooth"})*/
    theToggle.classList.remove("on");
    document.body.style.overflow = '';
    [ 'toggle', 'menu'].forEach(function( id ) {

        document.getElementById( id ).style.transition= 'all .5s';
        });
    }
//Text showing on hero like typweriter
var str = "Hello! I'm Renata, a frontend developer from Lisbon. Want to know more? Click below. ",
    i = 0,
    isTag,
    text;

(function type() {
    text = str.slice(0, ++i);
    if (text === str) return;
    
    document.getElementById('textHero').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 50);
}
());


//show Slideshow
var x = document.getElementsByClassName("slideshow-container");

function showSlideShow(){
    for (var i=0; i < x.length; i+=1){
        if(x[i].style.display="none"){
            x[i].style.display="block";

            document.getElementById("overlay").style.display = "block";
            //document.body.style.overflow = 'hidden';
        }
        else{
            x[i].style.display="none";
            document.getElementById("overlay").style.display = "none";
            //document.body.style.overflow = '';
            
        }
    }
}
//hide Slideshow
function hideSlideShow(){
    var x =  document.getElementsByClassName("slideshow-container");
    for (var i=0; i < x.length; i+=1){
        if(x[i].style.display === "block"){
            x[i].style.display = "none";
            document.getElementById("overlay").style.display = "none";
            document.body.style.overflow = '';
        }
    }
}

//Slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n); //1n
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n); //n
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

