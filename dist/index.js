//mobile navigation

window.onload = function(){
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const menu_button = document.getElementById('menu-button')
const menu_close = document.getElementById('menu-close')
 
let show_menu = false

menu_button.addEventListener('click',toggle)

function toggle(){
if(!show_menu){
  navMenu.classList.add('show')
  menu_button.classList.add('close')

  //set menu state
  show_menu = true
}else {
  menu_button.classList.remove('close')
  navMenu.classList.remove('show')
   
  //set menu state
  show_menu = false
}
}

     //gallery modal full-image view
// const modal = document.getElementById("myModal")

// const img = document.getElementById("myimage")
// const modalImg = document.getElementById("modal-image")

// img.addEventListener('click', () =>{
//   alert('hello')
//   modal.style.display = "block"
//   modalImg.src = this.src
// })

// // span close
//  const span = document.getElementsByClassName('close-gallery')[0]

//  span.addEventListener('click', () => {
//   modal.style.display = "none"
//  })
}


$(document).ready(function(){
  $(window).on('load scroll',function(){
      $('.navbar').removeClass('nav-toggle');
      if($(window).scrollTop()>35)
      {
          $('.header').css({'background':'#009e60','box-shadow':'0 .2rem .2rem rgba(0,0,0,.4) '});
      }
      else
      {
          $('.header').css({'background':'none','box-shadow':'none'});
      }
      
  });
//Back to top
  $(window).scroll(function () {
   if ($(this).scrollTop() > 100) {
       $('.back-to-top').fadeIn('slow');
   } else {
       $('.back-to-top').fadeOut('slow');
   }
 });

 $('.back-to-top').click(function () {
   $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
   return false;
 });
 
 });


const prev = document.getElementById("prev")

prev.addEventListener('click', () =>{
  alert('clicked')
})

// Open Modal
function openModal() {
   document.getElementById("myModal").style.display = "block"
}

// span close
function closeModal(){
  document.getElementById("myModal").style.display = "none"
  
}
 
//Modal slider image

const slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides(slideIndex += n)
}

function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  var i;
var slides = document.getElementsByClassName("mySlides")
 if (n > slides.length) {
   slideIndex = 1
 }
 if (n < 1){slideIndex = slides.length}
  for(i =0; i < slides.length; i++){
     slides[i].style.display = "none"
    }
  slides[slideIndex-1].style.display = "block"
  
 }
