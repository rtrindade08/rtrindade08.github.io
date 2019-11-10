
// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
/*function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}*/
// toggleClass
/*function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}*/

var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",
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


function scrollToPage (){
    document.getElementById('rectangle').scrollIntoView({behavior:"smooth"})  //provavelmente vou ter de usar jquery
}
//Show Hamburguer Icon
var theToggle = document.getElementById('toggle');
theToggle.onclick = function (){
    
    if(theToggle.classList.toggle("on")){
        document.body.style.overflow = 'hidden';
        
    }else{
        document.body.style.overflow = '';
        [ 'toggle', 'menu'].forEach(function( id ) {
            document.getElementById( id ).style.transition= 'all .5s';
        });
    }
    
}
//document.body.style.overflow = '';
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

/*document.getElementById("rectangle").addEventListener("mouseover", myFunction);

function myFunction() {
    document.getElementById("about").style.top = "0";
  }*/
var rectangle = document.getElementById('rectangle');
var Rect = rectangle.getBoundingClientRect();
rh = Rect.height;

  document.addEventListener("scroll", function() {
    var y = document.getElementsByClassName("about");
    for (var i=0; i<y.length;i+=1){

    if (window.pageYOffset > rh){
            y[i].style.display = "block";

    }}});

    
function goToPortfolio(){
    document.getElementById('portfolio').scrollIntoView({behavior:"smooth"})
    theToggle.classList.remove("on");
    document.body.style.overflow = '';
    [ 'toggle', 'menu'].forEach(function( id ) {

        document.getElementById( id ).style.transition= 'all .5s';
        
    });
    };


     /*var y = document.getElementById('about');
       var Rect = y.getBoundingClientRect();
        yh= Rect.height;
    alert(yh)
    alert(rh)*/
function goToAbout(){
    document.getElementById('overflow').scrollIntoView({behavior:"smooth"}) /*fazer scroll into view??*/
    theToggle.classList.remove("on");
    document.body.style.overflow = '';
    [ 'toggle', 'menu'].forEach(function( id ) {

        document.getElementById( id ).style.transition= 'all .5s';
        
    });
};
    function goToWork(){
    document.getElementById('footer').scrollIntoView({behavior:"smooth"})
    theToggle.classList.remove("on");
    document.body.style.overflow = '';
    [ 'toggle', 'menu'].forEach(function( id ) {

        document.getElementById( id ).style.transition= 'all .5s';
        
    });
    }
/*function scrollTo(duration, element) {
	var e = document.documentElement;
    if(e.scrollTop===0){
        var t = e.scrollTo;
        ++e.scrollTo;
        e = t+1===e.scrollTo--?e:document.body;
    }
    scrollToC(e, e.scrollTo, element, duration);
}

// Element to move, element or px from, element or px to, time in ms to animate
function scrollToC(element, from, to, duration) {
    if (duration <= 0) return;
    if(typeof from === "object")from=from.offsetTop;
    if(typeof to === "object")to=to.offsetTop;

    scrollToX(element, from, to, 0, 1/duration, 20);
}

function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
    if (t01 < 0 || t01 > 1 || speed<= 0) {
       element.scrollTo = xTo;
        return;
    }
	element.scrollTo = xFrom - (xFrom - xTo) * motion(t01);
	t01 += speed * step;
	
	setTimeout(function() {
		scrollToX(element, xFrom, xTo, t01, speed, step, motion);
	}, step);
}
*/

    

// Element to move, time in ms to animate
/*function scrollTo(element, duration) {
    var e = document.documentElement;
    if(e.scrollTop===0){
        var t = e.scrollTop;
        ++e.scrollTop;
        e = t+1===e.scrollTop--?e:document.body;
    }
    scrollToC(e, e.scrollTop, element, duration);
}

// Element to move, element or px from, element or px to, time in ms to animate
function scrollToC(element, from, to, duration) {
    if (duration <= 0) return;
    if(typeof from === "object")from=from.offsetTop;
    if(typeof to === "object")to=to.offsetTop;

    scrollToX(element, from, to, 0, 1/duration, 20, easeOutCuaic);
}

function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
    if (t01 < 0 || t01 > 1 || speed<= 0) {
        element.scrollTop = xTo;
        return;
    }
    element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
    t01 += speed * step;

    setTimeout(function() {
        scrollToX(element, xFrom, xTo, t01, speed, step, motion);
    }, step);
}
function easeOutCuaic(t){
    t--;
    return t*t*t+1;
}*/