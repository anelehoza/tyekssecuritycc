window.onload=function(){let e=document.getElementById("nav-menu");document.getElementById("nav-toggle"),document.getElementById("nav-close");let t=document.getElementById("menu-button");document.getElementById("menu-close");let n=!1;t.addEventListener("click",function(){n=n?(t.classList.remove("close"),e.classList.remove("show"),!1):(e.classList.add("show"),t.classList.add("close"),!0)})},$(document).ready(function(){$(window).on("load scroll",function(){$(".navbar").removeClass("nav-toggle"),35<$(window).scrollTop()?$(".header").css({background:"#009e60","box-shadow":"0 .2rem .2rem rgba(0,0,0,.4) "}):$(".header").css({background:"none","box-shadow":"none"})}),$(window).scroll(function(){100<$(this).scrollTop()?$(".back-to-top").fadeIn("slow"):$(".back-to-top").fadeOut("slow")}),$(".back-to-top").click(function(){return $("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})});let homeIndex=0;function showHomeSlides(){let e,t=document.getElementsByClassName("");for(e=0;e<t.length;e++)t[e].style.display="none";t++,homeIndex>t.length&&(slideIndex=1),t[homeIndex-1].style.display=0,setTimeout(showHomeSlides,3e3)}function openModal(){document.getElementById("myModal").style.display="block"}function closeModal(){document.getElementById("myModal").style.display="none"}showHomeSlides();var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var t,n=document.getElementsByClassName("mySlides");for(e>n.length&&(slideIndex=1),e<1&&(slideIndex=n.length),t=0;t<n.length;t++)n[t].style.display="none";n[(slideIndex=n.length<slideIndex?1:slideIndex)-1].style.display="block",n[slideIndex-1].style.display="block"}function myArticle(e){e.preventDefualt();document.getElementById("title").value,document.getElementById("author").value,document.getElementById("content").value,document.getElementById("category").value}function myJobs(e){e.preventDefualt();document.getElementById("title").value,document.getElementById("author").value,document.getElementById("content").value,document.getElementById("category").value}function displayData(e){let n=e.drinks[0];var t,e=document.getElementById("cocktail"),l=n.strDrink,o=document.createElement("h1"),l=(o.innerHTML=l,e.appendChild(o),document.createElement("img")),d=(l.src=n.strDrinkThumb,e.appendChild(l),document.body.style.backgroundImage="url('"+n.strDrinkThumb+"')",document.createElement("ul")),s=(e.appendChild(d),Object.keys(n).filter(function(e){return 0==e.indexOf("strIngredient")}).reduce(function(e,t){return null!=n[t]&&(e[t]=n[t]),e},{}));for(t in s){var c=s[t];(listItem=document.createElement("li")).innerHTML=c,d.appendChild(listItem)}}showSlides(slideIndex),jQuery,new Swiper("clients-containe",{spaceBetween:30,effect:"fade",autoplay:!0}),$("article").readmore(),$("article").readmore({speed:75,lessLink:'<a href="#">Read less</a>'}),fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(e=>{if(e)return e.json();throw new Error("network is not ok")}).then(e=>{console.log(e),displayData(e)}).catch(e=>console.log("Error:",e));