  let typed = new Typed("#typed-words", {
    strings: ["Designer", "Developer"],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  });

  new PureCounter();

  new PureCounter({
      
      selector: ".purecounter", 
      duration: 1.5, 
      delay: 10, 
      once: false, 
      pulse: true,
      decimals: 0, 
  });


let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll",function(){
  let currentscroll = this.window.pageYOffset;

  if (currentscroll <= 0){
    navbar.classList.remove("show","hide");

  }
  else if(currentscroll > lastScroll){
    navbar.classList.remove("show");
    navbar.classList.add("hide");

  }
  else{
    navbar.classList.remove("hide");
    navbar.classList.add("show");
  }

  lastScroll = currentscroll <= 0 ? 0 : currentscroll;
})
