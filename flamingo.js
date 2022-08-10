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
if(window.screen.width>500){
    var tl= new TimelineMax({onUpdate:updatePercentage}); //{onUpdate:updatePercentage} for scrollbased animations
    var tl2= new TimelineMax();
    const controller= new ScrollMagic.Controller();


    tl.from("#speech",2,{opacity:0});
    tl.from("#pic1",0.5,{x:-200, opacity:0});
    tl.from("#pic2",0.5,{x:-200, opacity:0});
    tl.from("#speech2",2,{x:200, opacity:0});
    tl.from("#speech3",2,{x:200, opacity:0});


        console.log("first ");
        const scene = new ScrollMagic.Scene({
            triggerElement: ".cessna",          //possition to trigger element
        })

            .setTween(tl)
            .addTo(controller);

        
    
        function updatePercentage(){
                // if(window.innerWidth<=600)
                console.log("window.innerWidth ");
                tl.progress();
            // console.log(tl.progress());

    }
}
});

