const pTag= document.querySelector("p");
const h1box= document.querySelector("h1");
const h2box= document.querySelector("h2");
const h3box= document.querySelector("h3");
const h4box= document.querySelector("h4");
const h5box= document.querySelector("h5");
const spanId= document.querySelectorAll("span");



function basla(){
  pTag.classList.toggle("p2");
  h1box.classList.toggle("h1box"); 
  h2box.classList.toggle("h2box");
  h3box.classList.toggle("h3box");
  h4box.classList.toggle("h4box");
  h5box.classList.toggle("h5box");
}
