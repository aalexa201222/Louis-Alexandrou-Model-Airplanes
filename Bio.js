document.addEventListener("DOMContentLoaded",function(event){
    const menu=document.querySelector('#mobile-menu');
    const menuLinks =document.querySelector('.navbar__menu');
    
    function dropdow(event){
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    }
    menu.addEventListener('click',dropdow);
    
    
// ANIMATION

console.log("saini")

var tl= new TimelineMax({onUpdate:updatePercentage}); //{onUpdate:updatePercentage} for scrollbased animations
var tl2= new TimelineMax({onUpdate:updatePercentage});
const controller= new ScrollMagic.Controller();


tl.from("#pic1",1,{x:-200, opacity:0});
tl.from("#speech",1,{x:200, opacity:0});
tl2.from("#pic2",1,{x:-200, opacity:0});
tl2.from("#speech2",1,{x:200, opacity:0,});

    console.log("first ");
    const scene = new ScrollMagic.Scene({
        triggerElement: ".triker",          //possition to trigger element
    })

        .setTween(tl)
         .addTo(controller);

    
    const scene2 = new ScrollMagic.Scene({
        triggerElement: ".triker2",          //possition to trigger element
    })
    
            .setTween(tl2)
             .addTo(controller);
    
    
   
    function updatePercentage(){
            // if(window.innerWidth<=600)
            console.log("window.innerWidth ");
            tl.progress();
        // console.log(tl.progress());

}
var body = document.getElementsByTagName('body');
console.log(document.getElementsByTagName('body')[0]);
body.style.backgroundColor = 'green';

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 300) {
        // green
        body.style.backgroundColor = 'green';
    } else if (scroll >= 300 && scroll < 600) {
        // yellow
        body.style.backgroundColor = 'yellow';
    } else if (scroll >= 600 && scroll < 1200) {
        // blue
        body.style.backgroundColor = 'blue';
    } else if (scroll >= 1200 && scroll < 1800) {
        // orange
        body.style.backgroundColor = 'orange';}}
});

