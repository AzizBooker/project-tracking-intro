
var tl =gsap.timeline()
tl
.from('.section_left',{
    opacity:0,
    x:-150,
    duration:.75,
    delay:.2
})
.from('.section_right',{
    opacity:0,
    x:150,
   duration:.75
})


body=document.querySelector('body')
openHamburger=document.querySelector("#hamburger_menu_open");
closeHamburger=document.querySelector('#hamburger_menu_close');
menuModal=document.querySelector('.menu_modal')
modalOverlay=document.querySelector('.overlay')

openHamburger.addEventListener('click',ev=>{
    console.log('click')
    openHamburger.style.display="none"
    closeHamburger.style.display="inline-block"
    menuModal.style.display="block"
    body.style.overflow="hidden"
  //  modalOverlay.style.display="block"

})
closeHamburger.addEventListener("click",ev=>{
    console.log('click')
    openHamburger.style.display="inline-block"
    closeHamburger.style.display="none"
    menuModal.style.display="none"
    body.style.overflow="auto"
  //  modalOverlay.style.display="none"
})
