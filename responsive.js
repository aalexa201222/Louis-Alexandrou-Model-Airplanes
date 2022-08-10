document.addEventListener("DOMContentLoaded",function(event){

const menu=document.querySelector('#mobile-menu');
const menuLinks =document.querySelector('.navbar__menu');

function dropdow(event){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
menu.addEventListener('click',dropdow);


var p=document.getElementById("pp");


function changeTextColor(){
    var p = document.getElementById("pp");
    var bc=["white",""];
    var c=["black","white"];
    p.style.backgroundColor= bc[y];
    p.style.color= c[y];
    y++;        
    if(y >= 2) {
        y = 0;
    } 
    
    
    setTimeout(changeTextColor, 10000);
}
function changeImage() {
    
    var img = document.getElementById("img1");
    img.src = images[x];
    x++;        
    if(x >= images.length) {
        x = 0;
    } 
     
    setTimeout(changeImage, 10000);
}

function fadeImg(el, val, fade) {
    if(fade === true) {
        val--;
    } else {
        val ++;
    }       
    if(val > 0 && val < 100) {
        el.style.opacity = val / 100;
        setTimeout(function(){ fadeImg(el, val, fade); }, 10);
    }
}

var images = [], x = 0,y=0;
images[0] = "https://scontent.fnic3-1.fna.fbcdn.net/v/t31.18172-8/13116519_530577517149878_5327009116593766039_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=4sUrx0y9Y0EAX_sJSmP&_nc_ht=scontent.fnic3-1.fna&oh=00_AT8J4vnIaJMaCsZJyBZ-uDn6pny3Gjp-kJr18JkhNVwsJw&oe=63029CE4";
images[1] = "https://scontent.fnic3-1.fna.fbcdn.net/v/t31.18172-8/23456260_780732372134390_8199535861932279724_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=oEvzDk_4818AX9I-7ep&_nc_ht=scontent.fnic3-1.fna&oh=00_AT_hb7mSzhwCEoFVL2Jbz9wDXPRnnyGZW90CT4R5lNbt8A&oe=63036A16";
console.log(images[0])
p[0]=document.getElementById("pp")
console.log(p[0].id)
p[1]=document.getElementById("ppp")
setTimeout(changeImage,0);
setTimeout(changeTextColor,0)

                    // ANIMATION

console.log("saini")

var tl= new TimelineMax({onUpdate:updatePercentage}); //{onUpdate:updatePercentage} for scrollbased animations
var tl2= new TimelineMax();
const controller= new ScrollMagic.Controller();

// tl.from("#box",.5, {opacity:0,scale: 0});
// tl.to("#box",2, {left:"20%",scale: 1.3,borderColor:'white',borderWidth:12,
// boxShadow:'1px 1px 0px 0px rgba(0,0,0,.09)'});

tl.from("blockquote", .5,{x:200, opacity:0});
tl.from("#sp", .5,{width: 0});
tl.from("#speech",0.5,{x:200, opacity:0});
tl.from("#pic1",0.5,{x:-200, opacity:0});
// tl.from("#pic2",0.5,{x:200, opacity:0});



const scene = new ScrollMagic.Scene({
    triggerElement: ".new",          //possition to trigger element
    triggerHook: "onLeave",             
    duration: "200%"
})

    // .setPin(".sticky")  //to stop the screen scrolling while in the animation
     .setTween(tl)
       .addTo(controller);
// const scene2 = new ScrollMagic.Scene({
//     triggerElement: ".blockquote"          //possition to trigger element
    
// })

//     .setTween(tl2)
//     .addTo(controller);

    function updatePercentage(){
            // if(window.innerWidth<=600)
            console.log("window.innerWidth ");
            tl.progress();
        // console.log(tl.progress());

}
                    // PROJECTS
    const show_more=document.querySelector('#show_more');
    row3=document.querySelector('#row3');
    function appear_row(event){
        row3.style.display = "flex";
        show_more.style.display='none'
    }
    show_more.addEventListener('click',appear_row);


});

