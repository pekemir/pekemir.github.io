/*aparecerobjetos*/

function reveal() {
  var reveals = document.querySelectorAll(".js-scroll");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    
    console.log(elementTop);
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

/*aparecerobjetos metodo2*/
const header=document.getElementById('controlheader')
const scrollElements = document.querySelectorAll(".js-scrollheader");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
return (
    (elementTop +window.innerHeight-100<=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  ))
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)||-10
  );
};

const displayScrollElement = (element) => {
  header.classList.add("headeractivo");
};

const hideScrollElement = (element) => {
  header.classList.remove("headeractivo");
};

var control=1;
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (el.getBoundingClientRect().top==0) {
     control=1 
    }
   if (elementInView(el, 1.25)&& control==1) {
      displayScrollElement(el);
      control=0;
    } else if (elementOutofView(el)&& control==1) {
      console.log("RESTOOTRO");
      hideScrollElement(el)
    }
  })
}
/*fin aparecer objetos metodo2*/
window.addEventListener("scroll", () => { 
  handleScrollAnimation();
  reveal()
});
/*fin aparecer objetos*/