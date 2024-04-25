//mobile navigation

window.onload = function(){

const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

navToggle.addEventListener('click', () =>{
  navMenu.classList.add('show')
})
 
    navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show')

    })

    /*-------scroll bar*/

    $(window).scroll(function () {
         if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
          } else {
            $('.back-to-top').fadeOut('slow');
        }
     });

     $('.back-to-top').click(function (e) {
      });
    
}



