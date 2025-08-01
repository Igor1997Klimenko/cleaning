"use strict";

// banner slider
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('#splide', {
    type: 'loop',          
    perPage: 1,            
    perMove: 1,            
    speed: 1200,           
    easing: 'ease-in-out', 
    autoplay: true,        
    interval: 4000,        
    pauseOnHover: true,    
    arrows: true,          
    pagination: false,      
    drag: true,           
  }).mount();
});
//   back to top
  var btn = $('#backtotop');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function scrollToTop(e){
      window.scrollTo(0, 0);
  });

// move animation
AOS.init({
  disable: function() {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  }
});
 /* Preloader */
 setTimeout(function(){
   $('.preloader').hide();
},400);

// Contact Form validate  
  $("#contactform").validate({
    rules:{
      // if any
    },
    messages:{
    //  if any
    }
  });
  $("#newsletter").validate({
    rules:{
      // if any
    },
    messages:{
    //  if any
    }
  });

  AOS.init({
    duration: 1000, // Default duration
    easing: 'ease-in-out', // Smooth easing for animations
    once: true, // Animation will happen only once
    mirror: false, // No repeat animation on scroll up
  });

  // counter 

	$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );
    var thisElement = $(this);
    $({count: settings.start}).animate({count: settings.end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};
$('#customers').jQuerySimpleCounter({end: 530,duration: 2000});
$('#members').jQuerySimpleCounter({end: 55,duration: 3000});
$('#award').jQuerySimpleCounter({end: 359,duration: 2000});
$('#project').jQuerySimpleCounter({end: 246,duration: 2500});
$('#project').jQuerySimpleCounter({end: 1000,duration: 3000});

// post 
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('.post', {
    type: 'loop',
    speed:600,
    perPage:4,
    autoplay: true,
    pauseOnHover: false,
    pagination: false,
    arrows:false,
    breakpoints:{
      490:{
        perPage:1,
      },
      992:{
        perPage:2,
      },
      1200:{
        perPage:3,
      },
    }
  }).mount();
});

// scroll to section on nav menu click
$('#nav_ul').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 25,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});

// scroll to section on offcanvas menu click
$('#offcanvas_ul').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 25,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});

// testimonial slider 
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('.testimonials', {
    type: 'loop',
    speed:600,
    perPage:3,
    perMove:1,
    focus: 0,
    autoplay: true,
    pauseOnHover: false,
    pagination: true,
    arrows:false,
    breakpoints:{
      490:{
        perPage:1,
      },
      992:{
        perPage:2,
      },
      1200:{
        perPage:3,
      },
    }
  }).mount();
});


// scroll to section on nav menu click
$('#nav_ul').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 25,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});

// scroll to section on offcanvas menu click
$('#offcanvas_ul').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 25,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});


// dark & light mode

var togButton = document.getElementById("btnSwitch");
var currThemeMode = localStorage.getItem("sc_dark");
if(!currThemeMode || currThemeMode == 'false'){
  document.documentElement.setAttribute("data-theme", "sc_light");
  // togButton.innerHTML = "<i class='fa fa-moon navtext-color'></i>";
}
else{
  document.documentElement.setAttribute("data-theme", "sc_dark");
  togButton.innerHTML = "<i class='fa fa-sun text-white'></i>";
}

togButton.addEventListener("click", toggle);
function toggle(){
  var currThemeMode = localStorage.getItem("sc_dark");
  if (currThemeMode === null){
     var currThemeMode = "false"
  }
  setTheme(currThemeMode);
}
function setTheme(currThemeMode){
  if(currThemeMode == "true" || currThemeMode == true ){
    document.documentElement.setAttribute("data-theme", "sc_light");
    togButton.innerHTML = "<i class='fa fa-moon navtext-color'></i>";
    localStorage.setItem("sc_dark", currThemeMode ? "false" : "true");
  }
  else{
    document.documentElement.setAttribute("data-theme", "sc_dark");
    togButton.innerHTML = "<i class='fa fa-sun text-white'></i>";
    localStorage.setItem("sc_dark", currThemeMode ? "true" : "false");
  }
}
  $(".radio-button").on('click', function(){
    $(".radio-button").removeClass('active');
    $(this).addClass('active');
  });

// offcanvas menu close
document.addEventListener("DOMContentLoaded", function(){
  var myOffcanvas = document.getElementById('offcanvasExample');
  var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
  document.getElementById("offcanvasbutton").addEventListener('click',function (e){
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
  });
});

// offcanvas menu close
$('.offcanvas-link').on( "click", function(){
  $('.close').click(); 
});

 // Contact Form validate  
 $("#contactform").validate({
   rules:{
     // if any
   },
   messages:{
   //  if any
   }
 });

 $(document).ready(function () {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Set the year in the target element
  $("#currentYear").text(currentYear);
});



window.onload = function () {
  var successMessage = localStorage.getItem("successMessage");
  var errorMessage = localStorage.getItem("emailfailed");

  if (successMessage) {
      // Display the success message in a Bootstrap alert
      var alertDiv = document.createElement('div');
      alertDiv.className = 'alert alert-success alert-dismissible fade show position-absolute top-0 start-50 translate-middle-x alertmsg';
      alertDiv.role = 'alert';
      alertDiv.innerHTML = successMessage +
          '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
      document.body.prepend(alertDiv);

      // Remove the success message from localStorage after displaying it
      localStorage.removeItem("successMessage");
  }
  else if(errorMessage) {
    // Display the success message in a Bootstrap alert
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-danger alert-dismissible fade show position-absolute top-0 start-50 translate-middle-x alertmsg';
    alertDiv.role = 'alert';
    alertDiv.innerHTML = errorMessage +
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
    document.body.prepend(alertDiv);

    // Remove the success message from localStorage after displaying it
    localStorage.removeItem("emailfailed");
  }
};

// 
document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.bubble-section');
  if (!section) return;

  function createBubble() {
    if (window.innerWidth < 480) return;

    const sectionHeight = section.offsetHeight;
    const sectionWidth = section.offsetWidth;

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 50 + 40;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';

    const left = Math.random() * sectionWidth;
    bubble.style.left = left + 'px';

    bubble.style.top = '-50px';

    const duration = Math.random() * 30 + 30;

    const animName = `fallDownDynamic_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    const keyframes = `
      @keyframes ${animName} {
        0% { transform: translateY(0) scale(1); opacity: 0.7; }
        100% { transform: translateY(${sectionHeight + 100}px) scale(1); opacity: 0.7; }
      }
    `;

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    bubble.style.animationName = animName;
    bubble.style.animationDuration = duration + 's';
    bubble.style.animationTimingFunction = 'linear';
    bubble.style.animationFillMode = 'forwards';
    bubble.style.transformStyle = 'preserve-3d';
    section.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, duration * 1000);
  }

  if (window.innerWidth >= 768) {
    setInterval(createBubble, 800);
  }
});
