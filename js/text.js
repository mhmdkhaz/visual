// loading full page 
let load = document.getElementById("loading");

window.onload = setInterval(function() {
    load.style.display = "none";
}, 3000);


// change color
let changeColor = document.querySelectorAll(".content-color li");
let saveColor = [];

for (let i = 0; i < changeColor.length; i++) {

  saveColor.push(changeColor[i].getAttribute("data-color"));

  changeColor[i].addEventListener("click" , function () {
    // remove color and class
    document.body.classList.remove(...saveColor);
    // add class and change color
    document.body.classList.add(this.getAttribute("data-color"));

  })
}



// start scroll for scroll top nav change nav 
let navbak = document.getElementById("scroltop");
let contentNav = document.querySelectorAll(".nav-link");
let navlogo = document.getElementById("logo");
let btnTop = document.getElementById("btn-top");//button top

window.onscroll = function scrollTopNav() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {

      navbak.classList.add("scroltop");

      // logo img set src
      navlogo.setAttribute("src" , "../images/logo-dark.png");

        for (let i = 0; i < contentNav.length; i++) {
          contentNav[i].classList.add("content-nav")
        }
        //button top
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
          btnTop.style.display = "block"
        }else{
          btnTop.style.display = "none"
        } 
    } else {
      navbak.classList.remove("scroltop");

      // logo img set src
      navlogo.setAttribute("src" , "../images/logo-white.png");

      for (let i = 0; i < contentNav.length; i++) {
        contentNav[i].classList.remove("content-nav")
      }
    }
  }

  // button top
  btnTop.onclick = function(){
    document.documentElement.scrollTop = 10 + "px"
  }
// start in filter imges
 let filterBtn = document.querySelectorAll(".btn-groub button")
 let filterImg = document.querySelectorAll(".img-filter img");

filterBtn.forEach(function (button) {
  button.addEventListener("click" , manageImgs)
})

function manageImgs() {
  filterImg.forEach(function (img) {
    img.style.display = "none"
  })
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
};

// start in contact placeholder hidden in focus and show in blur
 let contact = document.querySelectorAll(".input-information");

 function inputPlaceholder() {
   for (let i = 0; i < contact.length; i++) {
     contact[i].onfocus = function () {
     let plac = contact[i].getAttribute("placeholder");
       contact[i].setAttribute("data-plac" , plac);
       contact[i].removeAttribute("placeholder");
     }
     contact[i].onblur = function () {
       let getPlac = contact[i].getAttribute("data-plac");
       contact[i].setAttribute("placeholder" , getPlac);
       contact[i].removeAttribute("data-plac")
     }
   }
}
inputPlaceholder()