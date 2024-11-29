//mobile navigation

// const { get } = require("browser-sync");
// const { header } = require("express-validator");

window.onload = function () {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  const menu_button = document.getElementById("menu-button");
  const menu_close = document.getElementById("menu-close");

  let show_menu = false;

  menu_button.addEventListener("click", toggle);

  function toggle() {
    if (!show_menu) {
      navMenu.classList.add("show");
      menu_button.classList.add("close");

      //set menu state
      show_menu = true;
    } else {
      menu_button.classList.remove("close");
      navMenu.classList.remove("show");

      //set menu state
      show_menu = false;
    }
  }

  fetch('https://vite.dev/guide/features.html', 
    { method: "GET", 
      mode: 'no-cors',
      headers: { 
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))

};

$(document).ready(function () {
  $(window).on("load scroll", function () {
    $(".navbar").removeClass("nav-toggle");
    if ($(window).scrollTop() > 35) {
      $(".header").css({
        background: "#009e60",
        "box-shadow": "0 .2rem .2rem rgba(0,0,0,.4) ",
      });
    } else {
      $(".header").css({ background: "none", "box-shadow": "none" });
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function (e) {
    e.preventDefualt()
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
});

//Home section image slider

let homeIndex = 0;
showHomeSlides();

function showHomeSlides() {
  let i;
  let homeSlides = document.getElementsByClassName("");
  for (i = 0; i < homeSlides.length; i++) {
    homeSlides[i].style.display = "none";
  }
  homeSlides++;
  if (homeIndex > homeSlides.length) {
    slideIndex = 1;
  }
  homeSlides[homeIndex - 1].style.display = 0;
  setTimeout(showHomeSlides, 3000);
}

// Open Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// span close
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

//Modal slider image

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.display = "block";
}

//fetch articles to display in news page
